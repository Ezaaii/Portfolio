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
    left : 3000,
    behavior : 'smooth'
  });
});
codelink.addEventListener("click", function(){
  unlight();
  codelink.classList.add("highlighted");
  window.scroll({
    left : code.offsetLeft,
    top : 0,
    left : 4500,
    behavior : 'smooth'
  });
});
contlink.addEventListener("click", function(){
  unlight();
  contlink.classList.add("highlighted");
  window.scroll({
    left : cont.offsetLeft,
    top : 0,
    left : 6000,
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
  alert("Désolé! Je n'ai pas encore de numéro professionnel.");
});
var tel2 = document.getElementById('tel2');
tel2.addEventListener("click", function(){
  alert("Désolé! Je n'ai pas encore de numéro professionnel.");
});

///////////////////////
// HORIZONTAL SCROLL //
///////////////////////
window.addEventListener('wheel', ScrollActivation);//start the function.
function replaceScroll(event, modalclose) {
  if (event.deltaY != 0) {
    window.scroll(window.scrollX + event.deltaY * 3, window.scrollY);//replace by horizontal scroll
  }
  return;
}
var modalclose = true;//boolean to run/stop horizontal scroll
function stopScrollActivation() {
  modalclose = false;//stop horizontal scroll
}
function runScrollActivation() {
  modalclose = true;//rerun horizontal scroll
}
function ScrollActivation() {
  if(modalclose) {//if the modal is closed, run the horizontal scroll
    replaceScroll(event, modalclose);
  }
}

//////////////////////////
// KILL SCROLL on modal //
//////////////////////////

var modal = document.getElementsByClassName('modal');
var body = document.getElementById('body');
var lock = document.getElementsByClassName('lock');
var exit = document.getElementsByClassName('exit_button');
var close = document.getElementsByClassName('close');
for (i=0; i<lock.length; i++){
  lock[i].addEventListener("click", function(){
    body.classList.add("modal-open");
    stopScrollActivation();//Stop horizontal scroll
  });
}
for (e=0; e<exit.length; e++){
  exit[e].addEventListener("click", function(){
    body.classList.remove("modal-open");
    runScrollActivation();// Rerun the horizontal scroll
    for (a=0; a<modal.length; a++){//boucle pour effacer le modal
      modal[a].style.display = "none";
    }
  });
}
for (e=0; e<close.length; e++){
  close[e].addEventListener("click", function(){
    body.classList.remove("modal-open");
    runScrollActivation();// Rerun the horizontal scroll
    for (a=0; a<modal.length; a++){//boucle pour effacer le modal
      modal[a].style.display = "none";
    }
  });
}
