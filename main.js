// let btn1 = document.querySelector(".btn1");
// let btn2 = document.querySelector(".btn2");
// let scoreAll1 = document.querySelector(".score1");
// let scoreAll2 = document.querySelector(".score2");
// let currentScore1 = document.querySelector(".currentScore1");
// let currentScore2 = document.querySelector(".currentScore2");

// let resetBtn = document.querySelector(".reset-btn");

// btn1.addEventListener("click", () => {
//   let random1 = Math.floor(Math.random() * 10);
//   currentScore1.textContent = random1;
//   scoreAll1.textContent = parseInt(scoreAll1.textContent) + random1;
//   if (parseInt(scoreAll1.textContent) >= 100) {
//     alert(document.querySelector(".name1").textContent + " won!");
//   }
// });

// btn2.addEventListener("click", () => {
//   let random2 = Math.floor(Math.random() * 10);
//   currentScore2.textContent = random2;
//   scoreAll2.textContent = parseInt(scoreAll2.textContent) + random2;
//   if (parseInt(scoreAll2.textContent) >= 100) {
//     alert(document.querySelector(".name2").textContent + " won!");
//   }
// });

// resetBtn.addEventListener("click", () => {
//   currentScore1.textContent = 0;
//   currentScore2.textContent = 0;
//   scoreAll1.textContent = 0;
//   scoreAll2.textContent = 0;
// });
let btn1 = document.querySelector(".btn1");
let btn2 = document.querySelector(".btn2");
let scoreAll1 = document.querySelector(".score1");
let scoreAll2 = document.querySelector(".score2");
let currentScore1 = document.querySelector(".currentScore1");
let currentScore2 = document.querySelector(".currentScore2");
let resetBtn = document.querySelector(".reset-btn");
let user1 = document.querySelector(".user:nth-child(1) .scores");
let user2 = document.querySelector(".user:nth-child(2) .scores");

let winnerModal = document.querySelector(".winner-modal");
let winnerMessage = document.querySelector(".winner-message");
let closeBtn = document.querySelector(".close-btn");

let isPlayer1Turn = true;
btn2.disabled = true;

btn1.addEventListener("click", () => {
  if (isPlayer1Turn) {
    let random1 = Math.floor(Math.random() * 10);
    currentScore1.textContent = random1;
    scoreAll1.textContent = parseInt(scoreAll1.textContent) + random1;

    if (parseInt(scoreAll1.textContent) >= 100) {
      showWinner(document.querySelector(".name1").textContent);
    } else {
      switchTurns();
    }
  }
});

btn2.addEventListener("click", () => {
  if (!isPlayer1Turn) {
    let random2 = Math.floor(Math.random() * 10);
    currentScore2.textContent = random2;
    scoreAll2.textContent = parseInt(scoreAll2.textContent) + random2;

    if (parseInt(scoreAll2.textContent) >= 100) {
      showWinner(document.querySelector(".name2").textContent);
    } else {
      switchTurns();
    }
  }
});

function switchTurns() {
  isPlayer1Turn = !isPlayer1Turn;

  // Переключаем активные кнопки
  btn1.disabled = !isPlayer1Turn;
  btn2.disabled = isPlayer1Turn;

  if (isPlayer1Turn) {
    user1.classList.add("active");
    user1.classList.remove("inactive");
    user2.classList.remove("active");
    user2.classList.add("inactive");
  } else {
    user2.classList.add("active");
    user2.classList.remove("inactive");
    user1.classList.remove("active");
    user1.classList.add("inactive");
  }
}

resetBtn.addEventListener("click", resetGame);

closeBtn.addEventListener("click", () => {
  winnerModal.classList.add("hidden");
  resetGame();
});

function resetGame() {
  currentScore1.textContent = 0;
  currentScore2.textContent = 0;
  scoreAll1.textContent = 0;
  scoreAll2.textContent = 0;

  isPlayer1Turn = true;
  btn1.disabled = false;
  btn2.disabled = true;

  user1.classList.add("active");
  user1.classList.remove("inactive");
  user2.classList.remove("active");
  user2.classList.add("inactive");
}

function showWinner(winnerName) {
  winnerMessage.textContent = `${winnerName} победил!`;
  winnerModal.classList.remove("hidden");
}
