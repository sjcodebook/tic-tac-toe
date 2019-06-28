let activePlayer = 0;
let marks = ["X", "O"];
let gameStatus = true;

function insert(val) {
  if (gameStatus) {
    if (document.getElementById(val).innerHTML != "?") {
      return false;
    }
    document.getElementById(val).innerHTML = marks[activePlayer];

    if (activePlayer === 0) {
      checkResult();
      activePlayer = 1;
    } else {
      checkResult();
      activePlayer = 0;
    }
  }
}

function checkResult() {
  var active = marks[activePlayer];
  if (
    (document.getElementById("1").innerHTML == active &&
      document.getElementById("2").innerHTML == active &&
      document.getElementById("3").innerHTML == active) ||
    (document.getElementById("3").innerHTML == active &&
      document.getElementById("2").innerHTML == active &&
      document.getElementById("1").innerHTML == active)
  ) {
    won();
  } else if (
    (document.getElementById("4").innerHTML == active &&
      document.getElementById("5").innerHTML == active &&
      document.getElementById("6").innerHTML == active) ||
    (document.getElementById("6").innerHTML == active &&
      document.getElementById("5").innerHTML == active &&
      document.getElementById("4").innerHTML == active)
  ) {
    won();
  } else if (
    (document.getElementById("7").innerHTML == active &&
      document.getElementById("8").innerHTML == active &&
      document.getElementById("9").innerHTML == active) ||
    (document.getElementById("9").innerHTML == active &&
      document.getElementById("8").innerHTML == active &&
      document.getElementById("7").innerHTML == active)
  ) {
    won();
  } else if (
    (document.getElementById("1").innerHTML == active &&
      document.getElementById("4").innerHTML == active &&
      document.getElementById("7").innerHTML == active) ||
    (document.getElementById("7").innerHTML == active &&
      document.getElementById("4").innerHTML == active &&
      document.getElementById("1").innerHTML == active)
  ) {
    won();
  } else if (
    (document.getElementById("2").innerHTML == active &&
      document.getElementById("5").innerHTML == active &&
      document.getElementById("8").innerHTML == active) ||
    (document.getElementById("8").innerHTML == active &&
      document.getElementById("5").innerHTML == active &&
      document.getElementById("2").innerHTML == active)
  ) {
    won();
  } else if (
    (document.getElementById("3").innerHTML == active &&
      document.getElementById("6").innerHTML == active &&
      document.getElementById("9").innerHTML == active) ||
    (document.getElementById("9").innerHTML == active &&
      document.getElementById("6").innerHTML == active &&
      document.getElementById("3").innerHTML == active)
  ) {
    won();
  } else if (
    (document.getElementById("1").innerHTML == active &&
      document.getElementById("5").innerHTML == active &&
      document.getElementById("9").innerHTML == active) ||
    (document.getElementById("9").innerHTML == active &&
      document.getElementById("5").innerHTML == active &&
      document.getElementById("1").innerHTML == active)
  ) {
    won();
  } else if (
    (document.getElementById("3").innerHTML == active &&
      document.getElementById("5").innerHTML == active &&
      document.getElementById("7").innerHTML == active) ||
    (document.getElementById("7").innerHTML == active &&
      document.getElementById("5").innerHTML == active &&
      document.getElementById("3").innerHTML == active)
  ) {
    won();
  }
}

function won() {
  document.getElementById("heading").innerHTML =
    marks[activePlayer] + " is the winner";
  gameStatus = false;
}

function restart() {
  var ids = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];
  ids.map((id, i) => {
    document.getElementById(id).innerHTML = "?";
  });
  document.getElementById("heading").innerHTML = "Tic Tac Toe";
  gameStatus = true;
  activePlayer = 0;
}
