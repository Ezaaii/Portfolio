/////////////////////
// Scroll animation//
/////////////////////
var home = document.querySelector("#home");
var illu = document.querySelector("#illu");
var anim = document.querySelector("#anim");
var code = document.querySelector("#code");
var cont = document.querySelector("#contact");
//light the button of the current section

function unlight(){// unlight every buttons
  homelink.classList.remove("highlighted");
  illulink.classList.remove("highlighted");
  animlink.classList.remove("highlighted");
  codelink.classList.remove("highlighted");
  contlink.classList.remove("highlighted");
}

home.addEventListener("mouseenter", function(){
	var id = home.id;
  var homelink = document.getElementById(id+"link");
	unlight();
  homelink.classList.add("highlighted");
});
illu.addEventListener("mouseenter", function(){
	var id = illu.id;
  var illulink = document.getElementById(id+"link");
	unlight();
  illulink.classList.add("highlighted");
});
anim.addEventListener("mouseenter", function(){
	var id = anim.id;
  var animlink = document.getElementById(id+"link");
	unlight();
  animlink.classList.add("highlighted");
});
code.addEventListener("mouseenter", function(){
	var id = code.id;
  var codelink = document.getElementById(id+"link");
	unlight();
  codelink.classList.add("highlighted");
});
cont.addEventListener("mouseenter", function(){
	var id = cont.id;
  var contlink = document.getElementById(id+"link");
	unlight();
  contlink.classList.add("highlighted");
});
