//2:바위 1:가위 3:보
const scissorsBtn = document.getElementById("scissors");
const rockBtn = document.getElementById("rock");
const paperBtn = document.getElementById("paper");
const startBtn = document.getElementById("startBtn");
const imgRandom = document.getElementById("imgRandom");
const gameAll = document.getElementsByClassName("gameAll");
const result = document.getElementById("result");
const score = document.getElementById("score");
const endBtn = document.getElementById("endBtn");
const body = document.querySelector("body");

let win = 0;
let lose = 0;
let randomNum = 0;
let rspNum = 0;
// const a = document.getElementById("a");

function startPage() {
  scissorsBtn.style.display = "none";
  rockBtn.style.display = "none";
  paperBtn.style.display = "none";
  result.style.display = "none";
}

function showPage() {
  scissorsBtn.style.display = "flex";
  rockBtn.style.display = "flex";
  paperBtn.style.display = "flex";
  result.style.display = "flex";
  // const score = documnet.createElement("li");
}

startPage();

startBtn.addEventListener("click", showPage);

function printImg(src) {
  imgRandom.innerHTML = "";
  const img = document.createElement("img");
  img.src = src;
  imgRandom.appendChild(img);
}

function randomCom() {
  randomNum = Math.floor(Math.random() * 4) + 1;
}

scissorsBtn.addEventListener("click", () => {
  printImg("./images/scissors.png");
  rspNum = 1;
  randomCom();
  if (randomNum == 2) {
    result.innerHTML = "졌습니다";
    lose++;
    scoreList(win, lose);
  } else if (randomNum == rspNum) {
    result.innerHTML = "비겼습니다";
    scoreList(win, lose);
  } else {
    result.innerHTML = "이겼습니다";
    win++;
    scoreList(win, lose);
  }
});
rockBtn.addEventListener("click", () => {
  printImg("./images/rock.png");
  rspNum = 2;
  randomCom();
  if (randomNum == 3) {
    result.innerHTML = "졌습니다";
    lose++;
    scoreList(win, lose);
  } else if (randomNum == rspNum) {
    result.innerHTML = "비겼습니다";
    scoreList(win, lose);
  } else {
    result.innerHTML = "이겼습니다";
    win++;
    scoreList(win, lose);
  }
});
paperBtn.addEventListener("click", () => {
  printImg("./images/paper.png");
  rspNum = 3;
  randomCom();
  if (randomNum == 1) {
    result.innerHTML = "졌습니다";
    lose++;
    scoreList(win, lose);
  } else if (randomNum == rspNum) {
    result.innerHTML = "비겼습니다";
    scoreList(win, lose);
  } else {
    result.innerHTML = "이겼습니다";
    win++;
    scoreList(win, lose);
  }
});

function scoreList(win, lose) {
  score.innerHTML = `${win} : ${lose}`;
}

function endShow() {
  body.innerHTML = "<span class='endText'>게임이 종료되었습니다.</span>";
}

endBtn.addEventListener("click", endShow);
