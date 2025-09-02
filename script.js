// Background particles
const canvas = document.getElementById("bg");
const ctx = canvas.getContext("2d");
canvas.width = innerWidth; canvas.height = innerHeight;

let particles = [];
for (let i = 0; i < 100; i++) {
  particles.push({
    x: Math.random()*canvas.width,
    y: Math.random()*canvas.height,
    r: Math.random()*2+1,
    dx: (Math.random()-0.5)*0.5,
    dy: (Math.random()-0.5)*0.5
  });
}
function animateParticles(){
  ctx.clearRect(0,0,canvas.width,canvas.height);
  ctx.fillStyle = "#00bcd4";
  particles.forEach(p=>{
    ctx.beginPath();
    ctx.arc(p.x,p.y,p.r,0,Math.PI*2);
    ctx.fill();
    p.x+=p.dx; p.y+=p.dy;
    if(p.x<0||p.x>canvas.width) p.dx*=-1;
    if(p.y<0||p.y>canvas.height) p.dy*=-1;
  });
  requestAnimationFrame(animateParticles);
}
animateParticles();
window.onresize=()=>{canvas.width=innerWidth; canvas.height=innerHeight;};

// Typewriter effect
const text = "Front-End Developer | UI Designer | Dreamer";
let i=0;
function typing(){
  if(i<text.length){
    document.getElementById("typewriter").innerHTML += text.charAt(i);
    i++;
    setTimeout(typing,100);
  }
}
typing();

// Avatar upload
const avatarInput=document.getElementById("avatarInput");
const avatar=document.getElementById("avatar");
const resetBtn=document.getElementById("resetAvatar");

if(localStorage.getItem("avatar")){
  avatar.src=localStorage.getItem("avatar");
}else{
  avatar.src="https://via.placeholder.com/150";
}

avatarInput.addEventListener("change",()=>{
  const file=avatarInput.files[0];
  const reader=new FileReader();
  reader.onload=()=>{
    avatar.src=reader.result;
    localStorage.setItem("avatar",reader.result);
  }
  if(file) reader.readAsDataURL(file);
});

resetBtn.addEventListener("click",()=>{
  localStorage.removeItem("avatar");
  avatar.src="https://via.placeholder.com/150";
});

// Back to top button
const backBtn=document.getElementById("backToTop");
window.addEventListener("scroll",()=>{
  backBtn.style.display = window.scrollY>200?"block":"none";
});
backBtn.addEventListener("click",()=>{ window.scrollTo({top:0,behavior:"smooth"}); });

// Scroll reveal
function reveal(){
  document.querySelectorAll(".reveal").forEach(el=>{
    let rect=el.getBoundingClientRect();
    if(rect.top < window.innerHeight-50) el.classList.add("active");
  });
}
window.addEventListener("scroll",reveal);
reveal();

// Mobile menu
const menuBtn=document.getElementById("menuBtn");
const mobileNav=document.getElementById("mobileNav");
menuBtn.addEventListener("click",()=>{
  mobileNav.style.display=mobileNav.style.display==="flex"?"none":"flex";
});
