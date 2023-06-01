// Your code here

const h2 = document.createElement("h2");
h2.textContent = "This content added by JavaScript";

const ship = document.getElementById("ship");

function moveDodgerLeft() {
    const leftNumbers = ship.style.left.replace("px", "");
    const left = parseInt(leftNumbers, 10);
  
    if (left > 0) {
      ship.style.left = `${left - 12}px`;
    }
  }

  function moveDodgerRight() {
    const leftNumbers = ship.style.left.replace("px", "");
    const left = parseInt(leftNumbers, 10);
  
    if (left > -100 && left < 910) {
      ship.style.left = `${left + 12}px`;
    }
  }

  document.addEventListener("keydown", function (e) {
    if (e.key === "ArrowLeft") {
      moveDodgerLeft();
    }
  });

  document.addEventListener("keydown", function (e) {
    if (e.key === "ArrowRight") {
      moveDodgerRight();
    }
  });