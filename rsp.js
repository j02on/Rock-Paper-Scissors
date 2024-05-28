//2:바위 1:가위 3:보
const scissorsBtn = document.getElementById("scissors");
const rockBtn = document.getElementById("rock");
const paperBtn = document.getElementById("paper");
const startBtn = document.getElementById("startBtn");
const imgHumRandom = document.getElementById("imgHumRandom");
const gameAll = document.getElementsByClassName("gameAll");
const result = document.getElementById("result");
const score = document.getElementById("score");
const endBtn = document.getElementById("endBtn");
const body = document.querySelector("body");
const againBtn = document.querySelector("#againBtn");
const endText = document.querySelector(".endText");
const endWrapper = document.querySelector(".endWrapper");
const againTurnBtn = document.querySelector(".againTurnBtn");
const imgComRandom = document.querySelector("#imgComRandom");

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
  score.style.display = "none";
  imgHumRandom.style.display = "none";
  imgComRandom.style.display = "none";
  win = 0;
  lose = 0;
}

function showPage() {
  endWrapper.style.display = "none";
  scissorsBtn.style.display = "flex";
  rockBtn.style.display = "flex";
  paperBtn.style.display = "flex";
  imgHumRandom.style.display = "flex";
  imgComRandom.style.display = "flex";
  // const score = documnet.createElement("li");
}

startPage();

startBtn.addEventListener("click", showPage);

function printImg(src) {
  imgHumRandom.innerHTML = "";
  const imgHum = document.createElement("img");
  imgHum.src = src;
  imgHumRandom.appendChild(imgHum);
}

function printImgCom(src) {
  imgComRandom.innerHTML = "";
  const imgCom = document.createElement("img");
  imgCom.src = src;
  imgComRandom.appendChild(imgCom);
}

function randomCom() {
  randomNum = Math.floor(Math.random() * 4) + 1;
}

scissorsBtn.addEventListener("click", () => {
  result.style.display = "flex";
  score.style.display = "flex";
  printImg("./images/scissors.png");
  rspNum = 1;
  randomCom();
  if (randomNum == 2) {
    printImgCom("./images/rock.png");
    result.innerHTML = "졌습니다";
    lose++;
    scoreList(win, lose);
  } else if (randomNum == rspNum) {
    printImgCom("./images/scissors.png");
    result.innerHTML = "비겼습니다";
    scoreList(win, lose);
  } else {
    printImgCom("./images/paper.png");
    result.innerHTML = "이겼습니다";
    win++;
    scoreList(win, lose);
  }
});
rockBtn.addEventListener("click", () => {
  result.style.display = "flex";
  score.style.display = "flex";
  printImg("./images/rock.png");
  rspNum = 2;
  randomCom();
  if (randomNum == 3) {
    printImgCom("./images/paper.png");
    result.innerHTML = "졌습니다";
    lose++;
    scoreList(win, lose);
  } else if (randomNum == rspNum) {
    printImgCom("./images/rock.png");
    result.innerHTML = "비겼습니다";
    scoreList(win, lose);
  } else {
    printImgCom("./images/scissors.png");
    result.innerHTML = "이겼습니다";
    win++;
    scoreList(win, lose);
  }
});
paperBtn.addEventListener("click", () => {
  result.style.display = "flex";
  score.style.display = "flex";
  printImg("./images/paper.png");
  rspNum = 3;
  randomCom();
  if (randomNum == 1) {
    printImgCom("./images/scissors.png");
    result.innerHTML = "졌습니다";
    lose++;
    scoreList(win, lose);
  } else if (randomNum == rspNum) {
    printImgCom("./images/paper.png");
    result.innerHTML = "비겼습니다";
    scoreList(win, lose);
  } else {
    printImgCom("./images/rock.png");
    result.innerHTML = "이겼습니다";
    win++;
    scoreList(win, lose);
  }
});

function scoreList(win, lose) {
  score.innerHTML = `${win} : ${lose}`;
}

function endShow() {
  endWrapper.style.display = "flex";
  gameAll[0].style.display = "none";
  if (win > lose) {
    result.innerHTML = "이겼습니다😊";
  } else if (win === lose) {
    result.innerHTML = "비겼습니다😒";
  } else {
    result.innerHTML = "졌습니다😡";
  }
  Swal.fire({
    icon: "success",
    title: `${result.innerHTML}`,
    text: `${win} : ${lose}`,
  });
}
againTurnBtn.addEventListener("click", () => {
  gameAll[0].style.display = "flex";
  endWrapper.style.display = "none";
  startPage();
});
endBtn.addEventListener("click", endShow);

function againshow() {
  Swal.fire({
    icon: "warning",
    title: "다시 시작하시겠습니까?",
    showCancelButton: true,
    confirmButtonText: "시작하기",
    cancelButtonText: "종료하기",
    cancelButtonColor: "red",
  }).then((result) => {
    if (result.isConfirmed) {
      startPage();
    } else {
      endShow();
    }
  });
}

againBtn.addEventListener("click", againshow);
