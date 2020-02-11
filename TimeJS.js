
window.onload = Pageloadtime;
function Display_time(){
const time = new Date();
const hour = time.getHours() % 12;
const minute = time.getMinutes();
const second = time.getSeconds();
document.getElementById('hour').innerHTML = hour;
document.getElementById('minute').innerHTML = minute;
document.getElementById('second').innerHTML = second;
display();
}
function display(){
    let time =1000;
    disp = setTimeout('Display_time()', time);
   
}

