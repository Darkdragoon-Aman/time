let a;
let date;  
let time;
const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
setInterval(() => {
a = new Date();
time = a.getHours() + ":" + a.getMinutes() + ":" + a.getSeconds();
date = a.toLocaleDateString(undefined, options);
document.getElementById('lol').innerHTML = 'Current Time is:    ' + time;
document.getElementById('xd').innerHTML = 'Today\'s Date :    ' + date;
}, 1000);


