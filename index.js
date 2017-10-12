function $(a){
	var e = document.querySelectorAll(a)
	if (e.length == 1) return e[0]
	else return e
}
function loaded(e,f){
	e.addEventListener('load',f)
}
function showHeadpic(){
	$('#headpic').style.opacity = 1
	$('#headpic').style.transform = 'scale(1)'
}
loaded($('#headpic>img'),showHeadpic)
var bgs = $('#main-background>.bg')
loaded(window,()=>{
	bgs[0].style.opacity = 1
})