/* ===== PARTICULAS ===== */
for(let i=0;i<40;i++){
let p=document.createElement("div");
p.className="particle";
p.innerHTML=Math.random()>0.5?"❤️":"🎂";
p.style.left=Math.random()*100+"%";
p.style.animationDuration=(5+Math.random()*5)+"s";
document.body.appendChild(p);
}

const message = `🎂 ¡Feliz Cumpleaños! 🎂

Hoy celebramos tu existencia.

Un nuevo año en tu vida y te deseo que esté cargado de muchos éxitos y momentos gratificantes y de mucho amor para ti
Sigue manteniendo esa sonrisa tan linda que ilumina todo a su alrededor y esa alegría que define tu bonito ser
No cambies esa forma de ver el mundo, no tengas miedo de ser tú misma y de arriesgarte, porque puedes lograr todo aquello que te propongas. :3💕`;

let i = 0;
let speed = 40;

document.addEventListener("DOMContentLoaded", function(){

document.getElementById("startBtn").addEventListener("click", startExperience);

let music = document.getElementById("bgMusic");
let progress = document.querySelector(".progress");
let progressContainer = document.querySelector(".progress-container");

music.addEventListener("timeupdate",()=>{
let percent = (music.currentTime / music.duration) * 100;
progress.style.width = percent + "%";

document.getElementById("currentTime").innerText = formatTime(music.currentTime);
document.getElementById("duration").innerText = formatTime(music.duration);
});

progressContainer.addEventListener("click",(e)=>{
let width = progressContainer.clientWidth;
let clickX = e.offsetX;
music.currentTime = (clickX / width) * music.duration;
});

/* ===== SORPRESA 5 CLICKS ===== */
let clickCount = 0;
document.getElementById("musicCard").addEventListener("click",()=>{
clickCount++;
if(clickCount === 1){
document.getElementById("secret").classList.add("show");
setTimeout(()=>{
document.getElementById("secret").classList.remove("show");
clickCount=0;
},3700);
}
});

/* ===== SORPRESA ESQUINA ROTATIVA ===== */

let images = [
"img/donramonhatsune.jpg",
"img/miloba.jpg",
"img/Fati1.jpeg",
"img/Fati2.jpeg",
"img/Fati3.jpeg",
"img/Fati4.jpeg",
"img/Fati5.jpeg"
];

let currentImageIndex = 0;
let cornerVisible = false;

document.getElementById("cornerTrigger").addEventListener("click",()=>{

let corner = document.getElementById("cornerSecret");
let img = document.getElementById("cornerImage");

if(cornerVisible){
corner.classList.remove("show");
cornerVisible = false;
}else{
currentImageIndex++;
if(currentImageIndex >= images.length){
currentImageIndex = 0;
}

img.src = images[currentImageIndex];
corner.classList.add("show");
cornerVisible = true;
}

});

});

function formatTime(time){
if(isNaN(time)) return "0:00";
let minutes = Math.floor(time / 60);
let seconds = Math.floor(time % 60);
if(seconds < 10) seconds = "0" + seconds;
return minutes + ":" + seconds;
}

function startExperience(){

let menu = document.getElementById("menuScreen");
let content = document.getElementById("content");

menu.classList.add("fade-out");

setTimeout(()=>{
menu.style.display="none";
content.classList.add("show");
},800);

document.getElementById("talkingCat").style.display="block";
document.getElementById("dialogo").play();

typeWriter();
}

function typeWriter(){
if(i < message.length){
document.getElementById("text").innerHTML += message.charAt(i);
i++;
setTimeout(typeWriter, speed);
}else{
finishTyping();
}
}

function finishTyping(){

let dialogo = document.getElementById("dialogo");
dialogo.pause();
dialogo.currentTime = 0;

let cat = document.getElementById("talkingCat");
cat.src = "img/popcatcopy.png";

let music = document.getElementById("bgMusic");
music.play();

document.getElementById("musicCard").style.display="flex";
document.getElementById("envelope").style.display="block";
document.getElementById("banana").style.display="block";
}

function toggleMusic(){
let music=document.getElementById("bgMusic");
let btn=document.querySelector(".play-btn");

btn.style.transform="scale(0.8)";
setTimeout(()=>{
btn.style.transform="scale(1)";
},150);

if(music.paused){
music.play();
btn.innerHTML="⏸";
}else{
music.pause();
btn.innerHTML="▶";
}
}

function openLetter(){
document.getElementById("envelope").classList.toggle("open");
document.getElementById("letter").classList.toggle("show");
}

/* ===== TE LO DEBÍA ===== */
document.getElementById("debtTrigger").addEventListener("click",()=>{
document.getElementById("debtContainer").classList.toggle("show");
});