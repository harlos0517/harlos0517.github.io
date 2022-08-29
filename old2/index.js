/* homepage loaded animation */
function showHeadpic(){
	$('#headpic').style.opacity = 1
	$('#headpic').style.transform = 'scale(1)'
}
$('#headpic>img').$e('load',showHeadpic)

/* loginfo click animtation */
var logInfoShown = false
$('#loginfo').$e('click',function(){
	var log = $('#log')
	if(!logInfoShown){
		log.style.flex = '0 0 300px'
		log.style.margin = '20px 20px 50px 20px'
		logInfoShown = true
	}
	else{
		log.style.flex = '0 0 0'
		log.style.margin = '20px 0 50px 0'
		logInfoShown = false
	}
})

/* backgrounds load animation */
var pagebg=['pic/head4.jpg','pic/head7.jpg','pic/head2.jpg',
            'pic/head8.jpg','pic/head3.jpg','pic/head6.jpg']
$a('.loader').forEach(function(e,i,a){
	e.src = pagebg[i]
	e.$e('load',function(){
		$a('.bg')[i].style.backgroundImage = 'url(\'' + pagebg[i] + '\')'
		$a('.bg')[i].style.opacity = 1
		e.remove()
	})
})

/* changing pages */
var pages=['home','code','music','photo','timeline','diary']

/* var bgloaded=[true,false,false,false,false,false] */
var curpage = 0
function flip(tarpage){
	if(curpage != tarpage){
		var curelement = $('#' + pages[curpage])
		var tarelement = $('#' + pages[tarpage])
		curelement.$tc('show',false)
		tarelement.$tc('show',true)
		if(tarpage){
			$a('#navbar .activebg')[tarpage-1].$tc('show',true)
			$('#backhome').$tc('show',true)
		}
		else $('#backhome').$tc('show',false)
		if(curpage) $a('#navbar .activebg')[curpage-1].$tc('show',false)
		curpage = tarpage
	}
}
$a('#navbar .button').forEach(function(e,i,a){
	e.$e('click',function(){flip(i+1)})
})

/* back-to-home button */
$('#backhome').$e('click',function(){flip(0)})

/* current time */
function addZ(n){
	return n<10? '0'+n:''+n
}
function addSp(n){
	return n<10? ' '+n:''+n
}
function presenttime(){
	var time = new Date()
	y = time.getFullYear()
	z = addZ(time.getMonth()+1)
	w = addZ(time.getDate())
	h = addZ(time.getHours())
	m = addZ(time.getMinutes())
	s = addZ(time.getSeconds())
	date = y + ' / ' + z + ' / ' + w
	min = h + ' : ' + m + ' : '
	sec = s
	document.getElementById('date').innerHTML = date 
	document.getElementById('min').innerHTML = min 
	document.getElementById('sec').innerHTML = sec 
	setTimeout('presenttime()',1000)
}

presenttime()
updateDiary()