///////////////////////CATEGORIES//////////////////////////
var select = document.getElementById('select');
var charadesign = document.getElementById('charadesign');
var lily = document.getElementById('lily');
var witchies = document.getElementById('witchies');
var overwatch = document.getElementById('overwatch');
var commissions = document.getElementById('commissions');
var designs = document.getElementById('designs');
var fanarts = document.getElementById('fanarts');
//////////////////////////////////////////////////////////
///////////////////////BUTTONS//////////////////////////
var catexit = document.getElementById('catexit');
var catchara = document.getElementById('catchara');
var catlily = document.getElementById('catlily');
var catwitch = document.getElementById('catwitch');
var catoverwatch = document.getElementById('catoverwatch');
var catcommis = document.getElementById('catcommis');
var catdesign = document.getElementById('catdesign');
var catfanart = document.getElementById('catfanart');
//////////////////////////////////////////////////////////
//////////////////////hidden start////////////////////////
function hide(){
  charadesign.style.display = "none";
  lily.style.display = "none";
  witchies.style.display = "none";
  overwatch.style.display = "none";
  commissions.style.display = "none";
  designs.style.display = "none";
  fanarts.style.display = "none";
  catexit.style.display = "none";
}
hide();
//////////////////////////////////////////////////////////
/////////////////////hidden select////////////////////////
function hideselect(){
  select.style.display = "none";
}
//////////////////////////////////////////////////////////
////////////////////Show categories///////////////////////
catchara.onclick = function(){
  hide();
  hideselect();
  showexit();
  charadesign.style.display = "block";
}
catlily.onclick = function(){
  hide();
  hideselect();
  showexit();
  lily.style.display = "block";
}
catwitch.onclick = function(){
  hide();
  hideselect();
  showexit();
  witchies.style.display = "block";
}
catoverwatch.onclick = function(){
  hide();
  hideselect();
  showexit();
  overwatch.style.display = "block";
}
catcommis.onclick = function(){
  hide();
  hideselect();
  showexit();
  commissions.style.display = "block";
}
catdesign.onclick = function(){
  hide();
  hideselect();
  showexit();
  designs.style.display = "block";
}
catfanart.onclick = function(){
  hide();
  hideselect();
  showexit();
  fanarts.style.display = "block";
}
//////////////////////////////////////////////////////////
//////////////////////////exit////////////////////////////
function showexit(){
  catexit.style.display = "block";
}
catexit.onclick = function(){
  hide();
  select.style.display = "block";
}
