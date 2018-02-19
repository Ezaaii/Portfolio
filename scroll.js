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
//light the button of the current section

function unlight(){// unlight every buttons
  homelink.classList.remove("highlighted");
  illulink.classList.remove("highlighted");
  animlink.classList.remove("highlighted");
  codelink.classList.remove("highlighted");
  contlink.classList.remove("highlighted");
}
//refresh scroll + highlight
homelink.classList.add("highlighted");
window.scroll({
  left : home.offsetLeft,
  top : 0,
  left : 0,
  behavior : 'smooth'
});
homelink.addEventListener("click", function(){
  unlight();
  homelink.classList.add("highlighted");
  window.scroll({
    left : home.offsetLeft,
    top : 0,
    left : 0,
    behavior : 'smooth'
  });
});
illulink.addEventListener("click", function(){
  unlight();
  illulink.classList.add("highlighted");
  window.scroll({
    left : illu.offsetLeft,
    top : 0,
    left : 1500,
    behavior : 'smooth'
  });
});
animlink.addEventListener("click", function(){
  unlight();
  animlink.classList.add("highlighted");
  window.scroll({
    left : anim.offsetLeft,
    top : 0,
    left : 2950,
    behavior : 'smooth'
  });
});
codelink.addEventListener("click", function(){
  unlight();
  codelink.classList.add("highlighted");
  window.scroll({
    left : code.offsetLeft,
    top : 0,
    left : 3600,
    behavior : 'smooth'
  });
});
contlink.addEventListener("click", function(){
  unlight();
  contlink.classList.add("highlighted");
  window.scroll({
    left : cont.offsetLeft,
    top : 0,
    left : 4000,
    behavior : 'smooth'
  });
});

/////////
//LINKS//
/////////

var mail = document.getElementById('mail');
mail.addEventListener("click", function(){
  alert("Vous pouvez m'envoyer un mail à : n.vanroost@gmail.com");
});
var mail2 = document.getElementById('mail2');
mail2.addEventListener("click", function(){
  alert("Vous pouvez m'envoyer un mail à : n.vanroost@gmail.com");
});

var tel = document.getElementById('tel');
tel.addEventListener("click", function(){
  alert("Vous pouvez m'appeller au 0474/../../..");
});
var tel2 = document.getElementById('tel2');
tel2.addEventListener("click", function(){
  alert("Vous pouvez m'appeller au 0474/../../..");
});

// document.querySelectorAll('hoverimg').addEventListener("onclick", function(){
//   document.getElemtByTagName("body").classList.add("killscroll");
// });
// dovument.querySelectorAll('exit_button').addEventListener("onclick", function(){
//   document.getElemtByTagName("main").classList.remove("killscroll");
// });
