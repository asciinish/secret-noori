const yesBtn = document.querySelector(".yes__btn");
const noBtn = document.querySelector(".no__btn");
const themeSound = new Audio("/assets/sounds/main.mp3");

noBtn.addEventListener("click", () => {
  themeSound.play();
  themeSound.loop = true;
  noBtn.style.position = "absolute";
  let i = Math.floor(Math.random() * 500) + 1;
  let j = Math.floor(Math.random() * 500) + 1;
  noBtn.style.top = `${i}px`;
  noBtn.style.left = `${j}px`;
});

yesBtn.addEventListener("click", () => {
  location.href = "./yes.html";
});
