function setHeadpicOpacity(a,b){
	if(document.getElementById("headpic"+a) != undefined){
		document.getElementById("headpic"+a).style.opacity = b;}
}
function nextHeadpic(x,num,interval){
	setHeadpicOpacity((x-1<1?num:x-1),0);
	setHeadpicOpacity(x,1);
	x %= num;
	setTimeout(function(){nextHeadpic(x+1,num,interval);},interval);
}
function headpicSlideshow(num,interval){
	nextHeadpic(1,num,interval);
}