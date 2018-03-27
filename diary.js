function parseDate(d){
	var date = new Date(d)
	var str = ''
	str += date.getFullYear() + '/'
	str += (''+(date.getMonth()+1)).padStart(2,'0') + '/'
	str += (''+date.getDate()).padStart(2,'0') + '  '
	/*var utc = -date.getTimezoneOffset()/60
	str += '(' + ((utc>0)?('+'+utc):(utc==0?'0':utc)) + ')\n'*/
	str += (''+date.getHours()).padStart(2,'0') + ':'
	str += (''+date.getMinutes()).padStart(2,'0')
	return str
}

function updateDiary(){
	var req = new XMLHttpRequest()
	var server = 'http://localhost:11517'
	req.open('GET',server + '/diary')
	req.setRequestHeader('Content-Type','application/X-www-form-urlencoded')
	req.send()
	req.onreadystatechange = function () {
		if(req.readyState === XMLHttpRequest.DONE){
			console.log(server + ' responded with status ' + req.status)
			if(req.status>=200 && req.status<400){
				data = JSON.parse(req.response).reverse()
				var tar = $('#diary>.list>.wrapper')
				if($('#diary>.list>.wrapper>*'))
					$a('#diary>.list>.wrapper>*').forEach(function(e,i,a){e.remove()})
				data.forEach(function(e,i,a){
					var newElement = $n('div','diary'+e.id,'item')
						.apnd($n('div','','diarytitle').apnd($n('span').apnd(e.title)))
						.apnd($n('div','','diarytime').apnd($n('span').apnd(parseDate(e.written))))
					//	.apnd($n('div','','tags'))
					tar.apnd(newElement)
					newElement.$e('click',function(ele){readDiary(e.id)})
				})
			}
		}
	}
}

function readDiary(id){
	var req = new XMLHttpRequest()
	var server = 'http://localhost:11517'
	req.open('GET',server + '/diary/' + id)
	req.setRequestHeader('Content-Type','application/X-www-form-urlencoded')
	req.send()
	req.onreadystatechange = function () {
		if(req.readyState === XMLHttpRequest.DONE){
			console.log(server + ' responded with status ' + req.status)
			if(req.status>=200 && req.status<400){
				data = JSON.parse(req.response).content
				var converter = new showdown.Converter()
				var html = converter.makeHtml(data)
				$('#diary>.list').$tc('hide',true)
				$('#diary>.content').apnd($n('div','','wrapper').apnd(html))
				$('#diary>.content').$tc('show',true)
			}
		}
	}
}

$('#diary>.content>.back').$e('click',function(){
	$('#diary>.content>.wrapper').remove()
	$('#diary>.list').$tc('hide',false)
	$('#diary>.content').$tc('show',false)
})