document.addEventListener("DOMContentLoaded", () => {
  const overlay = document.getElementById("start-overlay");
  const tv = document.getElementById("tv-on");
  const startBtn = document.getElementById("start-btn");
  const startSound = document.getElementById("start-sound");
  const backgroundMusic = document.getElementById("background-music");

  tv.addEventListener("animationend", () => tv.remove());

  startBtn.addEventListener("click", () => {
    startSound.volume = 0.1;
    startSound.currentTime = 0;
    startSound.play();

    backgroundMusic.volume = 0.05;
    backgroundMusic.play();
    
    overlay.style.transition = "opacity .8s";
    overlay.style.opacity = "0";
    setTimeout(() => overlay.remove(), 800);
  });
});
