/*General Function Declaration*/
function $(a){
	var e = document.querySelectorAll(a)
	return e
}
function $n(a,id,cls){
	var e = document.createElement(a)
	if(id) e.id = id
	for(cl of Array.prototype.slice.call(arguments,2))
		e.classList.add(cl)
	return e
}
function $a(e,a){
	e.insertAdjacentHTML('beforeend',a)
	return e
}
function $g(e,n,v){
	if(v) e.setAttribute(n,v)
	else return e.getAttribute(n)
}
function loaded(e,f){
	e.addEventListener('load',f)
}
function clicked(e,f){
	e.addEventListener('click',f)
}
function parseDate(d){
	var date = new Date(d)
	var str = ' '
	str += date.getFullYear() + '/'
	str += (''+(date.getMonth()+1)).padStart(2,'0') + '/'
	str += (''+date.getDate()).padStart(2,'0') + ' <br>　'
	/*var utc = -date.getTimezoneOffset()/60
	str += '(' + ((utc>0)?('+'+utc):(utc==0?'0':utc)) + ')\n'*/
	str += (''+date.getHours()).padStart(2,'0') + ':'
	str += (''+date.getMinutes()).padStart(2,'0') + ':'
	str += (''+date.getSeconds()).padStart(2,'0') + ' '
	return str
}

var label = ['time','content','answer','ansTime']

function findkey(){
	var req = new XMLHttpRequest()
	var server = 'http://deemo.pw:11520/get'
	req.open('POST',server)
	req.setRequestHeader('Content-Type','application/X-www-form-urlencoded')
	req.send('key=' + $('#key>input')[0].value)
	req.onreadystatechange = function () {
		if(req.readyState === XMLHttpRequest.DONE){
			console.log(server + ' responded with status ' + req.status)
			if(req.status>=200 && req.status<400){
				data = eval(req.response).reverse()
				$('#table-content')[0].remove()
				$('#table')[0].append($n('div','table-content'))
				var t = $('#table-content')[0]
				data.forEach((e,i,a)=>{
					var div = $n('div','id'+e._id,'flex','row','center')
					div.append($a($n('div',null,'time'),parseDate(e.time)))
					div.append($a($n('div',null,'content'),
						e.content?e.content.replace(/\n/g,'<br>'):''))
					div.append($a($n('div',null,'answer'),
						e.ans?e.ans.replace(/\n/g,'<br>'):''))
					div.append($a($n('div',null,'ansTime'),e.ansTime?parseDate(e.ansTime):''))
					t.append(div)
				})
				//UI
				$('#content')[0].style.opacity = 0;
				$('#content')[0].style.zIndex = -5;
				$('#list')[0].style.opacity = 1;
				$('#list')[0].style.zIndex = 5;
				$('html').scrollTop = 0
			}
		}
	}
}

clicked($('#find')[0],findkey)

function back(){
	$('#list')[0].style.opacity = 0;
	$('#list')[0].style.zIndex = -5;
	$('#content')[0].style.opacity = 1;
	$('#content')[0].style.zIndex = 5;
}
clicked($('#back')[0],back);

function sendquestion(){
	var req = new XMLHttpRequest()
	var server = 'http://deemo.pw:11520/'
	req.open('POST',server)
	req.setRequestHeader('Content-Type','application/X-www-form-urlencoded')
	req.send('content=' + $('#question')[0].value +
		'&userAgent=' + window.navigator.userAgent +
		($('#key>input')[0].value?('&key=' + $('#key>input')[0].value):''))
	$g($('#send')[0],'value','Sending...')
	req.onreadystatechange = function () {
		if(req.readyState === XMLHttpRequest.DONE){
			console.log(server + ' responded with status ' + req.status)
			var success = (req.status>=200 && req.status<400)?true:false
			$g($('#send')[0],'value',success?'Success':'Failed')
			$('#send')[0].disabled = true
			setTimeout(()=>{
				$g($('#send')[0],'value','Send')
				$('#send')[0].disabled = false
			},3000)
		}
	}
}