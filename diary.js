function parseDate(d){
	var date = new Date(d)
	var str = ''
	str += date.getFullYear() + '/'
	str += (''+(date.getMonth()+1)).padStart(2,'0') + '/'
	str += (''+date.getDate()).padStart(2,'0') + '<br>'
	/*var utc = -date.getTimezoneOffset()/60
	str += '(' + ((utc>0)?('+'+utc):(utc==0?'0':utc)) + ')\n'*/
	str += (''+date.getHours()).padStart(2,'0') + ':'
	str += (''+date.getMinutes()).padStart(2,'0') + ':'
	str += (''+date.getSeconds()).padStart(2,'0') + '.'
	str += (''+date.getMilliseconds()).padStart(3,'0') + ' '
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
				data = eval(req.response).reverse()
				var tar = $('#diary>.content')
				if($('#diary>.content>*'))
					$('#diary>.content>*').forEach(function(e,i,a){e.remove()})
				data.forEach(function(e,i,a){
					var newElement = $n('div','','item')
						.apnd($n('div','','title').apnd(e.title))
						.apnd($n('div','','time').apnd(parseDate(e.written)))
					//	.apnd($n('div','','tags'))
					tar.apnd(newElement)
				})
			}
		}
	}
}
