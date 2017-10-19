/*General Function Declaration*/
function $(a){
	var e = document.querySelectorAll(a)
	if (e.length == 1) return e[0]
	else return e
}
function loaded(e,f){
	e.addEventListener('load',f)
}
function clicked(e,f){
	e.addEventListener('click',f)
}

/*homepage loaded animation*/
function showHeadpic(){
	$('#headpic').style.opacity = 1
	$('#headpic').style.transform = 'scale(1)'
}
$('#home').style.opacity = 1
loaded($('#headpic>img'),showHeadpic)
loaded(window,()=>{
	$('#main-background').style.opacity = 1
	$('#homebg').style.opacity = 1
	$('body').style.cursor = 'default'
})

/*loginfo click animtation*/
var logInfoShown = false
clicked($('#loginfo'),()=>{
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

/*changing pages*/
var pages=['home','code','music','photo','timeline','diary']
/*var pagebg=['pic/head4.jpg','pic/head7.jpg','pic/head2.jpg',
	'pic/head8.jpg','pic/head3.jpg','pic/head6.jpg']
var bgloaded=[true,false,false,false,false,false]*/
var curpage = 0
function flip(tarpage){
	if(curpage != tarpage){
		var dir = (tarpage - curpage > 0) ? 1 : -1
		var curbg = $('#' + pages[curpage] + 'bg')
		var tarbg = $('#' + pages[tarpage] + 'bg')
		var curelement = $('#' + pages[curpage])
		var tarelement = $('#' + pages[tarpage])
		curbg.style.left = dir*-10 + 'vw'
		curbg.style.opacity = 0
		tarbg.style.opacity = 1
		tarbg.style.left = 0
		for(var j = curpage + dir; j != tarpage; j += dir){
			$('#' + pages[j] + 'bg').style.left = dir*-10 + 'vw'
		}
		curelement.style.left = dir*-10 + 'vw'
		curelement.style.opacity = 0
		tarelement.style.opacity = 1
		tarelement.style.left = 0
		for(var j = curpage + dir; j != tarpage; j += dir){
			$('#' + pages[j]).style.left = dir*-10 + 'vw'
		}
		if(tarpage){
			$('#navbar .activebg')[tarpage-1].style.opacity = .7
			$('#backhome').style.opacity = 1
		}
		else $('#backhome').style.opacity = 0
		if(curpage) $('#navbar .activebg')[curpage-1].style.opacity = 0
		curpage = tarpage
	}
}
$('#navbar .button').forEach((e,i,a)=>{
	console.log(e)
	clicked(e,()=>{flip(i+1)})
})

/*back-to-home button*/
clicked($('#backhome'),()=>{flip(0)})