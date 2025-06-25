let heart = document.getElementById("heart");
let message = document.getElementById("message");
let scale = 1;
let maxScale = 3;

heart.addEventListener("click", () => {
  if (scale < maxScale) {
    scale += 0.2;
    heart.style.transform = `scale(${scale})`;
  } else {
    heart.style.display = "none";
    message.style.display = "block";
  }
});
