var skillImg=document.getElementsByClassName("skillImg");
var skillText=document.getElementsByClassName("skills");
var skillNum=document.getElementsByClassName("number");
var skillFill=document.getElementsByClassName("fill");


var techSkill = function(DOM, indx){
	var self=this;
	this.indx = indx; //spot in my global DOM list for reference

	this.changeAll = function(flag){
		if(flag){
			skillText[self.indx].style.opacity="1";
			skillNum[self.indx].style.opacity="1";
			var temp = skillFill[self.indx].children[0].innerText;

			skillFill[self.indx].style.height=(temp.slice(0,temp.length-1) - 5) + "px";
			skillFill[self.indx].style.opacity="1";

		}else{
			skillText[self.indx].style.opacity="0";
			skillNum[self.indx].style.opacity="0";
			skillFill[self.indx].style.opacity="0";
		}
	}

	DOM.onmouseover = function(){
		DOM.style.opacity=".25";
		self.changeAll(true);
	}
	DOM.onmouseout = function(){
		DOM.style.opacity="1";
		self.changeAll(false);
	}

	this.togFlag=true;
	this.toggle = function(){
		if(self.togFlag){
			DOM.style.opacity=".25";
			self.changeAll(true);
		}else{
			DOM.style.opacity="1";
			self.changeAll(false);
		}
		self.togFlag=!self.togFlag;
	}
}

var blank=[];
for (var i = 0; i <skillImg.length; i++ ){
	blank[i]=new techSkill(skillImg[i],i);
}

var allChangeAll = function(){
	for (var i=0; i < blank.length; i++){
		blank[i].toggle();
	}
}


//Adding content
var allText=["I recieved my BS in Biology from Georgetown University. Years later, I recieved my master's in Biolgy from New York Univerity, with a focus on bioinformatics. Currently, I'm a month from recieving certification in Data Science Specialization from John Hopkin's online Coursera course."]

var turnOn = function(){
	var x=allText[0];
	var growing = "";
	var obj = document.getElementsByClassName("blankP")[0];
	
	var counter=0;
	var y = setInterval(function(){
		if(counter==x.length){
			clearInterval(y)
		}else{
			growing = growing + x[counter]
			obj.innerHTML=growing;
			counter += 1;
		}

	},10)

}