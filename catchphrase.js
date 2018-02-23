var tab = [
  '"Un webdesigner qui sait coder"',
  '"Illustre illustrateur"',
  '"CATCHPHRASE!"',
  '"Hoy there!"',
  '"This catchphrase is random, try it."',
];
var random = Math.floor(Math.random() * 5);
document.getElementById('catchphrase').innerHTML = tab[random];
