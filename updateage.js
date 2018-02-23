var date = new Date('1994-10-30 00:00:00');
function getAge(date) {
    var now = new Date();
    var age = (now.getFullYear() - date.getFullYear())-1;
    return age;
};
var age = getAge(date);
document.getElementById('age').innerHTML = age;
