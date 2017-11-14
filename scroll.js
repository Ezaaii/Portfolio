/////////////////////
// Scroll animation//
/////////////////////
var homelink = document.querySelector("#homelink");
var home = document.querySelector("#home");
var illulink = document.querySelector("#illulink");
var illu = document.querySelector("#illu");
var animlink = document.querySelector("#animlink");
var anim = document.querySelector("#anim");
var docelink = document.querySelector("#codelink");
var code = document.querySelector("#code");
var contlink = document.querySelector("#contactlink");
var cont = document.querySelector("#contact");


homelink.addEventListener("click", function(){
  window.scroll({
    top : home.offsetTop,
    left : 0,
    behavior : 'smooth'
  });
});
illulink.addEventListener("click", function(){
  window.scroll({
    top : illu.offsetTop,
    left : 0,
    behavior : 'smooth'
  });
});
animlink.addEventListener("click", function(){
  window.scroll({
    top : anim.offsetTop,
    left : 0,
    behavior : 'smooth'
  });
});
codelink.addEventListener("click", function(){
  window.scroll({
    top : code.offsetTop,
    left : 0,
    behavior : 'smooth'
  });
});
contlink.addEventListener("click", function(){
  window.scroll({
    top : cont.offsetTop,
    left : 0,
    behavior : 'smooth'
  });
});
