document.addEventListener("DOMContentLoaded", () => {

const loginScreen = document.getElementById("loginScreen");
const messageScreen = document.getElementById("messageScreen");
const letterScreen = document.getElementById("letterScreen");

const loginBtn = document.getElementById("loginBtn");
const cancelBtn = document.getElementById("cancelBtn");

const girlfriendInput = document.getElementById("girlfriendName");
const nameInput = document.getElementById("nameInput");

const proceedBtn = document.getElementById("proceedBtn");

const popup = document.getElementById("catPopup");
const closePopup = document.querySelector(".closePopup");
const continueBtn = document.getElementById("continueBtn");

const bg = document.getElementById("bg");
const music = document.getElementById("bgMusic");

const greet = document.getElementById("greet");

let escapeMode = false;
const allowed = "alyssa mae g. valdez";

const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");

/* ================= MUSIC FADE IN ================= */
function playMusicCinematic(){
    music.volume = 0;
    music.play().catch(()=>{});

    let v = 0;
    const fade = setInterval(() => {
        if(v < 0.5){
            v += 0.02;
            music.volume = v;
        } else {
            clearInterval(fade);
        }
    }, 100);
}

/* ================= HEART SKY ================= */
function startHearts(){
setInterval(() => {

// 💖 hearts
const heart = document.createElement("div");
heart.classList.add("heart");
heart.innerHTML = "💖";

heart.style.left = Math.random() * 100 + "vw";
heart.style.fontSize = (10 + Math.random()*30) + "px";

bg.appendChild(heart);
setTimeout(()=>heart.remove(),6000);

// ✨ sparks
for(let i=0;i<3;i++){
const spark = document.createElement("div");
spark.classList.add("spark");

spark.style.left = Math.random()*100 + "vw";
spark.style.top = Math.random()*100 + "vh";

bg.appendChild(spark);
setTimeout(()=>spark.remove(),1500);
}

}, 200);
}

/* ================= LOGIN ================= */
loginBtn.addEventListener("click", () => {

const name = girlfriendInput.value.trim().toLowerCase();
const allowed = ["alyssa mae g. valdez", "alyssa", "mae", "valdez"].find(n => n === name);

if(!name){
alert("Enter your name 💖");
return;
}

if(name !== allowed){
alert("Only Alyssa can enter 💔");
return;
}

/* cinematic transition */
document.body.style.filter = "brightness(1.2)";
setTimeout(()=>document.body.style.filter="brightness(1)",800);

loginScreen.classList.remove("active");
messageScreen.classList.add("active");

greet.textContent = "Welcome My Love 💖";
nameInput.value = girlfriendInput.value;

playMusicCinematic();
startHearts();

});

/* ================= LETTER ================= */
proceedBtn.addEventListener("click", () => {
messageScreen.classList.remove("active");
letterScreen.classList.add("active");

// 💖 sync moment
letterRevealSync();
});

/* ================= POPUP ================= */
cancelBtn.addEventListener("click", () => {
if(!escapeMode) popup.style.display = "flex";
});

function unlock(){
popup.style.display = "none";
escapeMode = true;
}

closePopup.onclick = unlock;
continueBtn.onclick = unlock;

/* runaway cancel */
cancelBtn.addEventListener("mouseover", () => {
if(!escapeMode) return;

const x = Math.random() * (window.innerWidth - 100);
const y = Math.random() * (window.innerHeight - 50);

cancelBtn.style.position = "fixed";
cancelBtn.style.left = x + "px";
cancelBtn.style.top = y + "px";
});

});


yesBtn.addEventListener("click", () => {

// stop everything soft
document.body.style.transition = "all 1s ease";
document.body.style.filter = "brightness(1.5) saturate(1.5)";

// fireworks burst
for(let i=0;i<50;i++){
    const spark = document.createElement("div");
    spark.classList.add("spark");

    spark.style.left = Math.random()*100 + "vw";
    spark.style.top = Math.random()*100 + "vh";
    spark.style.background = "#ff4dff";

    bg.appendChild(spark);

    setTimeout(()=>spark.remove(),1500);
}

// final message
setTimeout(() => {
    alert("💖 She said YES! 💖\nYesssssss Thankk You SO Muchhh Mahal Kong Prinsesaaaa 💕");
}, 800);

});


function letterRevealSync() {

    // 🎬 cinematic flash effect
    document.body.style.transition = "all 0.6s ease";
    document.body.style.filter = "brightness(1.3) saturate(1.2)";

    setTimeout(() => {
        document.body.style.filter = "brightness(1)";
    }, 600);

    // 🎵 subtle music lift (emotional peak feel)
    if (music) {
        let target = 0.55;

        const boost = setInterval(() => {
            if (music.volume < target) {
                music.volume += 0.01;
            } else {
                clearInterval(boost);
            }
        }, 80);
    }
}

