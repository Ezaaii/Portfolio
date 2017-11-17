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
//refresh scroll + highlight
homelink.classList.add("highlighted");
window.scroll({
  top : home.offsetTop,
  left : 0,
  behavior : 'smooth'
});

homelink.addEventListener("click", function(){
  homelink.classList.add("highlighted");
  window.scroll({
    top : home.offsetTop,
    left : 0,
    behavior : 'smooth'
  });
  illulink.classList.remove("highlighted");
  animlink.classList.remove("highlighted");
  codelink.classList.remove("highlighted");
  contlink.classList.remove("highlighted");
});
illulink.addEventListener("click", function(){
  illulink.classList.add("highlighted");
  window.scroll({
    top : illu.offsetTop,
    left : 0,
    behavior : 'smooth'
  });
  homelink.classList.remove("highlighted");
  animlink.classList.remove("highlighted");
  codelink.classList.remove("highlighted");
  contlink.classList.remove("highlighted");
});
animlink.addEventListener("click", function(){
  animlink.classList.add("highlighted");
  window.scroll({
    top : anim.offsetTop,
    left : 0,
    behavior : 'smooth'
  });
  homelink.classList.remove("highlighted");
  illulink.classList.remove("highlighted");
  codelink.classList.remove("highlighted");
  contlink.classList.remove("highlighted");
});
codelink.addEventListener("click", function(){
  codelink.classList.add("highlighted");
  window.scroll({
    top : code.offsetTop,
    left : 0,
    behavior : 'smooth'
  });
  homelink.classList.remove("highlighted");
  illulink.classList.remove("highlighted");
  animlink.classList.remove("highlighted");
  contlink.classList.remove("highlighted");
});
contlink.addEventListener("click", function(){
  contlink.classList.add("highlighted");
  window.scroll({
    top : cont.offsetTop,
    left : 0,
    behavior : 'smooth'
  });
  homelink.classList.remove("highlighted");
  illulink.classList.remove("highlighted");
  animlink.classList.remove("highlighted");
  codelink.classList.remove("highlighted");
});
