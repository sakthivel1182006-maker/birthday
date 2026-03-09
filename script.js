// Countdown Timer

var birthdayDate = new Date("March 21, 2026 00:00:00").getTime();

setInterval(function(){

var now = new Date().getTime();
var distance = birthdayDate - now;

var days = Math.floor(distance/(1000*60*60*24));
var hours = Math.floor((distance%(1000*60*60*24))/(1000*60*60));
var minutes = Math.floor((distance%(1000*60*60))/(1000*60));
var seconds = Math.floor((distance%(1000*60))/1000);

document.getElementById("countdown").innerHTML =
"⏳ "+days+"d "+hours+"h "+minutes+"m "+seconds+"s";

},1000);


// Slideshow

let slides = document.querySelectorAll(".slide");
let slideIndex = 0;

function showSlides(){

slides.forEach((slide)=>{
slide.style.display="none";
});

slideIndex++;

if(slideIndex > slides.length)
slideIndex = 1;

slides[slideIndex-1].style.display="block";

setTimeout(showSlides,2000);

}

showSlides();


// Start Birthday

function startBirthday(){

document.getElementById("wish").innerHTML =
"🎂 Wishing you a day filled with love, joy and happiness! 🎉";

document.getElementById("music").play();

startConfetti();

}


// Confetti Animation

function startConfetti(){

const canvas = document.getElementById("confetti");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let pieces = [];

for(let i=0;i<120;i++){

pieces.push({
x:Math.random()*canvas.width,
y:Math.random()*canvas.height,
size:Math.random()*8+4,
speed:Math.random()*3+1
});

}

function animate(){

ctx.clearRect(0,0,canvas.width,canvas.height);

pieces.forEach(p=>{

ctx.fillStyle="hsl("+Math.random()*360+",100%,50%)";
ctx.fillRect(p.x,p.y,p.size,p.size);

p.y += p.speed;

if(p.y > canvas.height){
p.y = 0;
}

});

requestAnimationFrame(animate);

}

animate();

}