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

/*headpic loaded animation*/
function showHeadpic(){
	$('#headpic').style.opacity = 1
	$('#headpic').style.transform = 'scale(1)'
}
loaded($('#headpic>img'),showHeadpic)

/*background loaded animation*/
var bgs = $('#main-background>.bg')
loaded(window,()=>{
	bgs[0].style.opacity = 1
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