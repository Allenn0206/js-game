//Initialize game button elements
const btnGameOne = document.querySelector(".btn-game.one");
const btnGameTwo = document.querySelector(".btn-game.two");
const btnGameThree = document.querySelector(".btn-game.three");
const btnGameFour = document.querySelector(".btn-game.four");
const btnGameFive = document.querySelector(".btn-game.five");
const btnGameSix = document.querySelector(".btn-game.six");
const btnGameSeven = document.querySelector(".btn-game.seven");
const btnGameEight = document.querySelector(".btn-game.eight");
const btnGameNine = document.querySelector(".btn-game.nine");
const btnGameTen = document.querySelector(".btn-game.ten");
const btnGameEleven = document.querySelector(".btn-game.eleven");
const btnGameTwelve = document.querySelector(".btn-game.twelve");
const btnGameThirteen = document.querySelector(".btn-game.thirteen");
const btnGameFourteen = document.querySelector(".btn-game.fourteen");
const btnGameFifteen = document.querySelector(".btn-game.fifteen");
const btnGameSixteen = document.querySelector(".btn-game.sixteen");
const btnGameSeventeen = document.querySelector(".btn-game.seventeen");
const btnGameEighteen = document.querySelector(".btn-game.eighteen");
const btnGameNineteen = document.querySelector(".btn-game.nineteen");
const btnGameTwenty = document.querySelector(".btn-game.twenty");
const btnGameTwentyone = document.querySelector(".btn-game.twentyone");
const btnGameTwentytwo = document.querySelector(".btn-game.twentytwo");
const btnGameTwentythree = document.querySelector(".btn-game.twentythree");
const btnGameTwentyfour = document.querySelector(".btn-game.twentyfour");
const btnGameTwentyfive = document.querySelector(".btn-game.twentyfive");

const btnGame = document.querySelectorAll(".btn-game");
//initialize game button images
const btnOneImg = document.querySelector(".btn-one-img");
const btnTwoImg = document.querySelector(".btn-two-img");
const btnThreeImg = document.querySelector(".btn-three-img");
const btnFourImg = document.querySelector(".btn-four-img");
const btnFiveImg = document.querySelector(".btn-five-img");
const btnSixImg = document.querySelector(".btn-six-img");
const btnSevenImg = document.querySelector(".btn-seven-img");
const btnEightImg = document.querySelector(".btn-eight-img");
const btnNineImg = document.querySelector(".btn-nine-img");
const btnTenImg = document.querySelector(".btn-ten-img");
const btnElevenImg = document.querySelector(".btn-eleven-img");
const btnTwelveImg = document.querySelector(".btn-twelve-img");
const btnThirteenImg = document.querySelector(".btn-thirteen-img");
const btnFourteenImg = document.querySelector(".btn-fourteen-img");
const btnFifteenImg = document.querySelector(".btn-fifteen-img");
const btnSixteenImg = document.querySelector(".btn-sixteen-img");
const btnSeventeenImg = document.querySelector(".btn-seventeen-img");
const btnEighteenImg = document.querySelector(".btn-eighteen-img");
const btnNineteenImg = document.querySelector(".btn-nineteen-img");
const btnTwentyImg = document.querySelector(".btn-twenty-img");
const btnTwentyoneImg = document.querySelector(".btn-twentyone-img");
const btnTwentytwoImg = document.querySelector(".btn-twentytwo-img");
const btnTwentythreeImg = document.querySelector(".btn-twentythree-img");
const btnTwentyfourImg = document.querySelector(".btn-twentyfour-img");
const btnTwentyfiveImg = document.querySelector(".btn-twentyfive-img");

const btnImg = document.querySelectorAll(".btn-img");
// DOM elements initialization
const newGameButton = document.querySelector(".new-game");
const instructionsButton = document.querySelector(".instructions");
const restartButton = document.querySelector(".restart");
const quitButton = document.querySelector(".quit");
const userCurrency = document.querySelector(".userGold");
const wagerInput = document.querySelector(".wagerInput");
const playButton = document.querySelector(".btn-play");
const gameResult = document.querySelector(".gameResult");
const winAudio = document.querySelector("#winning-effect");
const loseAudio = document.querySelector("#losing-effect");
//wager buttons initialization
const minimumBtn = document.querySelector(".minimum");
const maximumBtn = document.querySelector(".maximum");
const halfBtn = document.querySelector(".one-half");
const doubleBtn = document.querySelector(".double");
const wagerBtns = document.querySelectorAll(".btn-wager");

// Modal initialization
const instructionsModal = document.querySelector(".modal.instructions");
const closeModalBtns = document.querySelectorAll(".closeModal");
const winGameModal = document.querySelector(".modal.wingame");
const loseGameModal = document.querySelector(".modal.losegame");
const overlay = document.querySelector(".overlay");

// Set initial values
let playing = false;
let userGold;
let winnings = 0;
let playerBet = 100;
let hitCounter = 0;
let numRows = 5;
let numCols = 5;
let numBombs = 4;

let landMines = [];
const initializeMines = () => {
  for (let i = 0; i < numRows; i++) {
    const row = [];
    for (let j = 0; j < numCols; j++) {
      row.push({
        isBomb: false,
        isRevealed: false,
      });
    }
    landMines.push(row);
  }
};
const initializeBombs = () => {
  let bombsPlaced = 0;
  while (bombsPlaced < numBombs) {
    const row = Math.floor(Math.random() * numRows);
    const col = Math.floor(Math.random() * numCols);
    if (!landMines[row][col].isBomb) {
      landMines[row][col].isBomb = true;
      bombsPlaced++;
    }
  }
};

// player selection buttons for landmines
btnGameOne.addEventListener("click", () => {
  if (!landMines[0][0].isRevealed) {
    if (landMines[0][0].isBomb) {
      btnOneImg.src = "./assets/image/mines.png";
      landMines[0][0].isRevealed = true;
      loseRound();
      checkGameOver();
    } else {
      btnOneImg.src = "./assets/image/bouty.png";
      landMines[0][0].isRevealed = true;
      winRound();
    }
  }
});
btnGameTwo.addEventListener("click", () => {
  if (!landMines[0][1].isRevealed) {
    if (landMines[0][1].isBomb) {
      btnTwoImg.src = "./assets/image/mines.png";
      landMines[0][1].isRevealed = true;
      loseRound();
      checkGameOver();
    } else {
      btnTwoImg.src = "./assets/image/bouty.png";
      landMines[0][1].isRevealed = true;
      winRound();
    }
  }
});
btnGameThree.addEventListener("click", () => {
  if (!landMines[0][2].isRevealed) {
    if (landMines[0][2].isBomb) {
      btnThreeImg.src = "./assets/image/mines.png";
      landMines[0][2].isRevealed = true;
      loseRound();
      checkGameOver();
    } else {
      btnThreeImg.src = "./assets/image/bouty.png";
      landMines[0][2].isRevealed = true;
      winRound();
    }
  }
});
btnGameFour.addEventListener("click", () => {
  if (!landMines[0][3].isRevealed) {
    if (landMines[0][3].isBomb) {
      btnFourImg.src = "./assets/image/mines.png";
      landMines[0][3].isRevealed = true;
      loseRound();
      checkGameOver();
    } else {
      btnFourImg.src = "./assets/image/bouty.png";
      landMines[0][3].isRevealed = true;
      winRound();
    }
  }
});
btnGameFive.addEventListener("click", () => {
  if (!landMines[0][4].isRevealed) {
    if (landMines[0][4].isBomb) {
      btnFiveImg.src = "./assets/image/mines.png";
      landMines[0][4].isRevealed = true;
      loseRound();
      checkGameOver();
    } else {
      btnFiveImg.src = "./assets/image/bouty.png";
      landMines[0][4].isRevealed = true;
      winRound();
    }
  }
});
btnGameSix.addEventListener("click", () => {
  if (!landMines[1][0].isRevealed) {
    if (landMines[1][0].isBomb) {
      btnSixImg.src = "./assets/image/mines.png";
      landMines[1][0].isRevealed = true;
      loseRound();
      checkGameOver();
    } else {
      btnSixImg.src = "./assets/image/bouty.png";
      landMines[1][0].isRevealed = true;
      winRound();
    }
  }
});
btnGameSeven.addEventListener("click", () => {
  if (!landMines[1][1].isRevealed) {
    if (landMines[1][1].isBomb) {
      btnSevenImg.src = "./assets/image/mines.png";
      landMines[1][1].isRevealed = true;
      loseRound();
      checkGameOver();
    } else {
      btnSevenImg.src = "./assets/image/bouty.png";
      landMines[1][1].isRevealed = true;
      winRound();
    }
  }
});
btnGameEight.addEventListener("click", () => {
  if (!landMines[1][2].isRevealed) {
    if (landMines[1][2].isBomb) {
      btnEightImg.src = "./assets/image/mines.png";
      landMines[1][2].isRevealed = true;
      loseRound();
      checkGameOver();
    } else {
      btnEightImg.src = "./assets/image/bouty.png";
      landMines[1][2].isRevealed = true;
      winRound();
    }
  }
});
btnGameNine.addEventListener("click", () => {
  if (!landMines[1][3].isRevealed) {
    if (landMines[1][3].isBomb) {
      btnNineImg.src = "./assets/image/mines.png";
      landMines[1][3].isRevealed = true;
      loseRound();
      checkGameOver();
    } else {
      btnNineImg.src = "./assets/image/bouty.png";
      landMines[1][3].isRevealed = true;
      winRound();
    }
  }
});
btnGameTen.addEventListener("click", () => {
  if (!landMines[1][4].isRevealed) {
    if (landMines[1][4].isBomb) {
      btnTenImg.src = "./assets/image/mines.png";
      landMines[1][4].isRevealed = true;
      loseRound();
      checkGameOver();
    } else {
      btnTenImg.src = "./assets/image/bouty.png";
      landMines[1][4].isRevealed = true;
      winRound();
    }
  }
});
btnGameEleven.addEventListener("click", () => {
  if (!landMines[2][0].isRevealed) {
    if (landMines[2][0].isBomb) {
      btnElevenImg.src = "./assets/image/mines.png";
      landMines[2][0].isRevealed = true;
      loseRound();
      checkGameOver();
    } else {
      btnElevenImg.src = "./assets/image/bouty.png";
      landMines[2][0].isRevealed = true;
      winRound();
    }
  }
});
btnGameTwelve.addEventListener("click", () => {
  if (!landMines[2][1].isRevealed) {
    if (landMines[2][1].isBomb) {
      btnTwelveImg.src = "./assets/image/mines.png";
      landMines[2][1].isRevealed = true;
      loseRound();
      checkGameOver();
    } else {
      btnTwelveImg.src = "./assets/image/bouty.png";
      landMines[2][1].isRevealed = true;
      winRound();
    }
  }
});
btnGameThirteen.addEventListener("click", () => {
  if (!landMines[2][2].isRevealed) {
    if (landMines[2][2].isBomb) {
      btnThirteenImg.src = "./assets/image/mines.png";
      landMines[2][2].isRevealed = true;
      loseRound();
      checkGameOver();
    } else {
      btnThirteenImg.src = "./assets/image/bouty.png";
      landMines[2][2].isRevealed = true;
      winRound();
    }
  }
});
btnGameFourteen.addEventListener("click", () => {
  if (!landMines[2][3].isRevealed) {
    if (landMines[2][3].isBomb) {
      btnFourteenImg.src = "./assets/image/mines.png";
      landMines[2][3].isRevealed = true;
      loseRound();
      checkGameOver();
    } else {
      btnFourteenImg.src = "./assets/image/bouty.png";
      landMines[2][3].isRevealed = true;
      winRound();
    }
  }
});
btnGameFifteen.addEventListener("click", () => {
  if (!landMines[2][4].isRevealed) {
    if (landMines[2][4].isBomb) {
      btnFifteenImg.src = "./assets/image/mines.png";
      landMines[2][4].isRevealed = true;
      loseRound();
      checkGameOver();
    } else {
      btnFifteenImg.src = "./assets/image/bouty.png";
      landMines[2][4].isRevealed = true;
      winRound();
    }
  }
});
btnGameSixteen.addEventListener("click", () => {
  if (!landMines[3][0].isRevealed) {
    if (landMines[3][0].isBomb) {
      btnSixteenImg.src = "./assets/image/mines.png";
      landMines[3][0].isRevealed = true;
      loseRound();
      checkGameOver();
    } else {
      btnSixteenImg.src = "./assets/image/bouty.png";
      landMines[3][0].isRevealed = true;
      winRound();
    }
  }
});
btnGameSeventeen.addEventListener("click", () => {
  if (!landMines[3][1].isRevealed) {
    if (landMines[3][1].isBomb) {
      btnSeventeenImg.src = "./assets/image/mines.png";
      landMines[3][1].isRevealed = true;
      loseRound();
      checkGameOver();
    } else {
      btnSeventeenImg.src = "./assets/image/bouty.png";
      landMines[3][1].isRevealed = true;
      winRound();
    }
  }
});
btnGameEighteen.addEventListener("click", () => {
  if (!landMines[3][2].isRevealed) {
    if (landMines[3][2].isBomb) {
      btnEighteenImg.src = "./assets/image/mines.png";
      landMines[3][2].isRevealed = true;
      loseRound();
      checkGameOver();
    } else {
      btnEighteenImg.src = "./assets/image/bouty.png";
      landMines[3][2].isRevealed = true;
      winRound();
    }
  }
});
btnGameNineteen.addEventListener("click", () => {
  if (!landMines[3][3].isRevealed) {
    if (landMines[3][3].isBomb) {
      btnNineteenImg.src = "./assets/image/mines.png";
      landMines[3][3].isRevealed = true;
      loseRound();
      checkGameOver();
    } else {
      btnNineteenImg.src = "./assets/image/bouty.png";
      landMines[3][3].isRevealed = true;
      winRound();
    }
  }
});
btnGameTwenty.addEventListener("click", () => {
  if (!landMines[3][4].isRevealed) {
    if (landMines[3][4].isBomb) {
      btnTwentyImg.src = "./assets/image/mines.png";
      landMines[3][4].isRevealed = true;
      loseRound();
      checkGameOver();
    } else {
      btnTwentyImg.src = "./assets/image/bouty.png";
      landMines[3][4].isRevealed = true;
      winRound();
    }
  }
});
btnGameTwentyone.addEventListener("click", () => {
  if (!landMines[4][0].isRevealed) {
    if (landMines[4][0].isBomb) {
      btnTwentyoneImg.src = "./assets/image/mines.png";
      landMines[4][0].isRevealed = true;
      loseRound();
      checkGameOver();
    } else {
      btnTwentyoneImg.src = "./assets/image/bouty.png";
      landMines[4][0].isRevealed = true;
      winRound();
    }
  }
});
btnGameTwentytwo.addEventListener("click", () => {
  if (!landMines[4][1].isRevealed) {
    if (landMines[4][1].isBomb) {
      btnTwentytwoImg.src = "./assets/image/mines.png";
      landMines[4][1].isRevealed = true;
      loseRound();
      checkGameOver();
    } else {
      btnTwentytwoImg.src = "./assets/image/bouty.png";
      landMines[4][1].isRevealed = true;
      winRound();
    }
  }
});
btnGameTwentythree.addEventListener("click", () => {
  if (!landMines[4][2].isRevealed) {
    if (landMines[4][2].isBomb) {
      btnTwentythreeImg.src = "./assets/image/mines.png";
      landMines[4][2].isRevealed = true;
      loseRound();
      checkGameOver();
    } else {
      btnTwentythreeImg.src = "./assets/image/bouty.png";
      landMines[4][2].isRevealed = true;
      winRound();
    }
  }
});
btnGameTwentyfour.addEventListener("click", () => {
  if (!landMines[4][3].isRevealed) {
    if (landMines[4][3].isBomb) {
      btnTwentyfourImg.src = "./assets/image/mines.png";
      landMines[4][3].isRevealed = true;
      loseRound();
      checkGameOver();
    } else {
      btnTwentyfourImg.src = "./assets/image/bouty.png";
      landMines[4][3].isRevealed = true;
      winRound();
    }
  }
});
btnGameTwentyfive.addEventListener("click", () => {
  if (!landMines[4][4].isRevealed) {
    if (landMines[4][4].isBomb) {
      btnTwentyfiveImg.src = "./assets/image/mines.png";
      landMines[4][4].isRevealed = true;
      loseRound();
      checkGameOver();
    } else {
      btnTwentyfiveImg.src = "./assets/image/bouty.png";
      landMines[4][4].isRevealed = true;
      winRound();
    }
  }
});

//Function for quarter bet
function setMinimum() {
  playerBet = 100;
  wagerInput.value = Number(playerBet);
}

//Function for maximum bet
function setMaximum() {
  playerBet = userGold;
  wagerInput.value = Number(playerBet);
}

//Function for one-half bet
function setHalf() {
  playerBet = Math.round(0.5 * wagerInput.value);
  if (playerBet <= 100) {
    playerBet = 100;
  }
  wagerInput.value = Number(playerBet);
}

//Function for double on last bet
function setDouble() {
  playerBet = Math.round(2 * wagerInput.value);
  if (playerBet >= userGold) {
    playerBet = userGold;
  }
  wagerInput.value = Number(playerBet);
}

// wager buttons
minimumBtn.addEventListener("click", setMinimum);
maximumBtn.addEventListener("click", setMaximum);
halfBtn.addEventListener("click", setHalf);
doubleBtn.addEventListener("click", setDouble);

const displayPlayerCoins = (userGold) => {
  userCurrency.textContent = ` ${userGold} Gold`;
};

// Function for new game
const newGame = () => {
  playing = false;
  userGold = 1500;
  playButton.textContent = "Play";
  wagerInput.value = 100;
  newGameButton.disabled = true;
  quitButton.disabled = false;
  restartButton.disabled = false;
  wagerInput.disabled = false;
  playButton.disabled = false;
  wagerBtns.forEach((element) => {
    element.disabled = false;
    element.style.opacity = 1;
  });
  btnGame.forEach((element) => {
    element.disabled = true;
    element.style.opacity = 0.5;
  });
  btnImg.forEach((element) => (element.src = "./assets/icons/question.png"));
  displayPlayerCoins(userGold);
};

// Function for quit game
const quitGame = () => {
  playing = false;
  playButton.textContent = "Play";
  newGameButton.disabled = false;
  restartButton.disabled = true;
  quitButton.disabled = true;
  wagerInput.disabled = true;
  playButton.disabled = true;
  wagerBtns.forEach((element) => {
    element.disabled = true;
    element.style.opacity = 0.5;
  });
  btnGame.forEach((element) => {
    element.disabled = true;
    element.style.opacity = 0.5;
  });
};

const showInstructionsModal = () => {
  instructionsModal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};

const closeModal = () => {
  instructionsModal.classList.add("hidden");
  winGameModal.classList.add("hidden");
  loseGameModal.classList.add("hidden");
  overlay.classList.add("hidden");
};

//Function for winning a round
function winRound() {
  hitCounter++;
  if (hitCounter === 1) {
    winnings = playerBet * 1.17;
  } else if (hitCounter === 2) {
    winnings = playerBet * 1.39;
  } else if (hitCounter === 3) {
    winnings = playerBet * 1.68;
  } else if (hitCounter === 4) {
    winnings = playerBet * 2.0;
  } else if (hitCounter === 5) {
    winnings = playerBet * 2.48;
  } else if (hitCounter === 6) {
    winnings = playerBet * 3.1;
  } else if (hitCounter === 7) {
    winnings = playerBet * 3.92;
  } else if (hitCounter === 8) {
    winnings = playerBet * 5.0;
  } else if (hitCounter === 9) {
    winnings = playerBet * 6.6;
  } else if (hitCounter === 10) {
    winnings = playerBet * 8.8;
  } else if (hitCounter === 11) {
    winnings = playerBet * 12.0;
  } else if (hitCounter === 12) {
    winnings = playerBet * 16.8;
  } else if (hitCounter === 13) {
    winnings = playerBet * 24.27;
  } else if (hitCounter === 14) {
    winnings = playerBet * 36.41;
  } else if (hitCounter === 15) {
    winnings = playerBet * 57.22;
  } else if (hitCounter === 16) {
    winnings = playerBet * 95.37;
  } else if (hitCounter === 17) {
    winnings = playerBet * 171.67;
  } else if (hitCounter === 18) {
    winnings = playerBet * 343.35;
  } else if (hitCounter === 19) {
    winnings = playerBet * 801.16;
  } else if (hitCounter === 20) {
    winnings = playerBet * 2400;
  } else if (hitCounter === 21) {
    winnings = playerBet * 12020;
  }
  winnings = Math.round(winnings);
  playButton.textContent = `Checkout: ${winnings} Gold `;
  resultStatus = "Won";
  winAudio.play();
}

//Function for losing a round
function loseRound() {
  displayPlayerCoins(userGold);
  resultStatus = "Lost";
  playing = false;
  playButton.textContent = "Play";
  playButton.disabled = false;
  wagerInput.disabled = false;
  wagerBtns.forEach((element) => {
    element.disabled = false;
    element.style.opacity = 1;
  });
  btnGame.forEach((element) => {
    element.disabled = true;
    element.style.opacity = 0.5;
  });
  winnings = 0;
  hitCounter = 0;
  loseAudio.play();
}

function checkGameWin() {
  if (userGold >= 5000) {
    quitGame();
    winGameModal.classList.remove("hidden");
    overlay.classList.remove("hidden");
  }
}

function checkGameOver() {
  if (userGold === 0) {
    quitGame();
    loseGameModal.classList.remove("hidden");
    overlay.classList.remove("hidden");
  }
}

//Function for displaying results
function displayResults() {
  gameResult.textContent = playRound(userSelection);
}

//Function for audio
function winBounty() {
  winAudio = loadSound("./assets/audio/Win sound effect.mp4");
}

//Function for play button
const playLandMines = () => {
  playing = !playing;
  // Play
  if (playing) {
    userGold -= playerBet;
    numRows = 5;
    numCols = 5;
    numBombs = 4;
    landMines = [];
    wagerInput.disabled = true;
    newGameButton.disabled = true;
    restartButton.disabled = false;
    quitButton.disabled = false;
    wagerBtns.forEach((element) => {
      element.disabled = true;
      element.style.opacity = 0.5;
    });
    btnGame.forEach((element) => {
      element.disabled = false;
      element.style.opacity = 1;
    });
    btnImg.forEach((element) => (element.src = "./assets/icons/question.png"));
    initializeMines();
    initializeBombs();
    displayPlayerCoins(userGold);
    playButton.textContent = `Checkout`;
    console.log(landMines);
    // Checkout
  } else {
    wagerInput.disabled = false;
    wagerBtns.forEach((element) => {
      element.disabled = false;
      element.style.opacity = 1;
    });
    btnGame.forEach((element) => {
      element.disabled = true;
      element.style.opacity = 0.5;
    });
    playButton.textContent = "Play";
    userGold += Number(winnings);
    displayPlayerCoins(userGold);
    winnings = 0;
    hitCounter = 0;
    checkGameWin();
  }
};

// Game setting buttons
newGameButton.addEventListener("click", newGame);
instructionsButton.addEventListener("click", showInstructionsModal);
closeModalBtns.forEach((element) =>
  element.addEventListener("click", closeModal)
);
restartButton.addEventListener("click", newGame);
quitButton.addEventListener("click", quitGame);
playButton.addEventListener("click", playLandMines);

quitGame();
