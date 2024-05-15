const scissorsBtn = document.querySelector(".scissors");
const rockBtn = document.querySelector(".rock");
const paperBtn = document.querySelector(".paper");

scissorsBtn.addEventListener("click", function () {
  const scissorsImg = document.createElement("img");
  scissorsImg.src = "./images/가위.png";
});

rockBtn.addEventListener("click", function () {
  const rockImg = document.createElement("img");
  rockImg.src = "./images/바위.png";
});

paperBtn.addEventListener("click", function () {
  const paperImg = document.createElement("img");
  paperImg.src = "./images/보.png";
});
