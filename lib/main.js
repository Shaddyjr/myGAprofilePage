skillImg=document.getElementsByTagName("li > img");

for (var i = 0; i<skillImg.length; i++){
	skills[i].onmouseover = function(x){
		x.style.opacity=1;
	}
}
