// /!\ TROUVER UN MOYEN D'EVITER LA REPETITION......... :(

function select(){
  var image = document.getElementById(id+"title").innerHTML;
  id_img.push(image);
}
function createmodal(){
  document.write('<div class="modal"><div class="H_box"><div class="exit_button" id="exit_button"><i class="fa fa-times fa-2x" aria-hidden="true"></i></div><div class="H_pics"><img src="'+images+'"/></div><div class="H_desc"><h3>'+title+'</h3><p>'+description+'</p></div></div></div>');
}
var id_img = [];
var img = "img";
for (i=0; i<36; i++){
  var id = img+i;
  select();
}
console.log(id_img);
id.onclick=function(){
  createmodal();
}
//CALL DES IMAGES
//IMG 1
// var modal1 = document.getElementById('myModal1');// Get the modal
// var img1 = document.getElementById('img1');// Get the button
// img1.onclick = function(){// show the modal
//   modal1.style.display = "block";
// }
// var exit1 = document.getElementById("exit_button1");// Get the X element that closes the modal
// exit1.onclick = function() {// When the user clicks on X, close the modal
//   modal1.style.display = "none";
// }
//
// //IMG 2
// var modal2 = document.getElementById('myModal2');
// var img2 = document.getElementById('img2');
// img2.onclick = function(){
//   modal2.style.display = "block";
// }
// var exit2 = document.getElementById("exit_button2");
// exit2.onclick = function() {
//   modal2.style.display = "none";
// }
//
// //IMG 3
// var modal3 = document.getElementById('myModal3');
// var img3 = document.getElementById('img3');
// img3.onclick = function(){
//   modal3.style.display = "block";
// }
// var exit3 = document.getElementById("exit_button3");
// exit3.onclick = function() {
//   modal3.style.display = "none";
// }
//
// //IMG 4
// var modal4 = document.getElementById('myModal4');
// var img4 = document.getElementById('img4');
// img4.onclick = function(){
//   modal4.style.display = "block";
// }
// var exit4 = document.getElementById("exit_button4");
// exit4.onclick = function() {
//   modal4.style.display = "none";
// }
//
// //IMG 5
// var modal5 = document.getElementById('myModal5');
// var img5 = document.getElementById('img5');
// img5.onclick = function(){
//   modal5.style.display = "block";
// }
// var exit5 = document.getElementById("exit_button5");
// exit5.onclick = function() {
//   modal5.style.display = "none";
// }
//
// //IMG 6
// var modal6 = document.getElementById('myModal6');
// var img6 = document.getElementById('img6');
// img6.onclick = function(){
//   modal6.style.display = "block";
// }
// var exit6 = document.getElementById("exit_button6");
// exit6.onclick = function() {
//   modal6.style.display = "none";
// }
//
// //IMG 7
// var modal7 = document.getElementById('myModal7');
// var img7 = document.getElementById('img7');
// img7.onclick = function(){
//   modal7.style.display = "block";
// }
// var exit7 = document.getElementById("exit_button7");
// exit7.onclick = function() {
//   modal7.style.display = "none";
// }
//
// //IMG 8
// var modal8 = document.getElementById('myModal8');
// var img8 = document.getElementById('img8');
// img8.onclick = function(){
//   modal8.style.display = "block";
// }
// var exit8 = document.getElementById("exit_button8");
// exit8.onclick = function() {
//   modal8.style.display = "none";
// }
//
// //IMG 9
// var modal9 = document.getElementById('myModal9');
// var img9 = document.getElementById('img9');
// img9.onclick = function(){
//   modal9.style.display = "block";
// }
// var exit9 = document.getElementById("exit_button9");
// exit9.onclick = function() {
//   modal9.style.display = "none";
// }
//
// //IMG 10
// var modal10 = document.getElementById('myModal10');
// var img10 = document.getElementById('img10');
// img10.onclick = function(){
//   modal10.style.display = "block";
// }
// var exit10 = document.getElementById("exit_button10");
// exit10.onclick = function() {
//   modal10.style.display = "none";
// }
//
// //IMG 11
// var modal11 = document.getElementById('myModal11');
// var img11 = document.getElementById('img11');
// img11.onclick = function(){
//   modal11.style.display = "block";
// }
// var exit11 = document.getElementById("exit_button11");
// exit11.onclick = function() {
//   modal11.style.display = "none";
// }
//
// //IMG 12
// var modal12 = document.getElementById('myModal12');
// var img12 = document.getElementById('img12');
// img12.onclick = function(){
//   modal12.style.display = "block";
// }
// var exit12 = document.getElementById("exit_button12");
// exit12.onclick = function() {
//   modal12.style.display = "none";
// }
//
// //IMG 13
// var modal13 = document.getElementById('myModal13');
// var img13 = document.getElementById('img13');
// img13.onclick = function(){
//   modal13.style.display = "block";
// }
// var exit13 = document.getElementById("exit_button13");
// exit13.onclick = function() {
//   modal13.style.display = "none";
// }
//
// //IMG 14
// var modal14 = document.getElementById('myModal14');
// var img14 = document.getElementById('img14');
// img14.onclick = function(){
//   modal14.style.display = "block";
// }
// var exit14 = document.getElementById("exit_button14");
// exit14.onclick = function() {
//   modal14.style.display = "none";
// }
// //CALL DES ANIMS
// //ANIM 1
// var modalanim1 = document.getElementById('myModalanim1');// Get the modal
// var anim1 = document.getElementById('anim1');// Get the button
// anim1.onclick = function(){// show the modal
//   modalanim1.style.display = "block";
// }
// var exitanim1 = document.getElementById("exitanim_button1");// Get the X element that closes the modal
// exitanim1.onclick = function() {// When the user clicks on X, close the modal
//   modalanim1.style.display = "none";
// }
//
// //ANIM 1
// var modalanim2 = document.getElementById('myModalanim2');// Get the modal
// var anim2 = document.getElementById('anim2');// Get the button
// anim2.onclick = function(){// show the modal
//   modalanim2.style.display = "block";
// }
// var exitanim2 = document.getElementById("exitanim_button2");// Get the X element that closes the modal
// exitanim2.onclick = function() {// When the user clicks on X, close the modal
//   modalanim2.style.display = "none";
// }
//
// //////////////////
// //CALL DES CODES//
// //////////////////
// //CODE 1
// var modalcode1 = document.getElementById('myModalcode1');// Get the modal
// var code1 = document.getElementById('code1');// Get the button
// code1.onclick = function(){// show the modal
//   modalcode1.style.display = "block";
// }
// var exitcode1 = document.getElementById("exitcode_button1");// Get the X element that closes the modal
// exitcode1.onclick = function() {// When the user clicks on X, close the modal
//   modalcode1.style.display = "none";
// }
