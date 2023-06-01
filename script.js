// Your code here
let windowWidth = window.innerWidth; 

const ship = document.getElementById("ship");

function moveShipLeft() {
    const leftNumbers = ship.style.left.replace("px", "");
    const left = parseInt(leftNumbers, 10);
  
    if (left > 0) {
      ship.style.left = `${left - 12}px`;
    }
  }

  function moveShipRight() {
    const leftNumbers = ship.style.left.replace("px", "");
    const left = parseInt(leftNumbers, 10);
  
    if (left > -100 && left < windowWidth - 90) {
      ship.style.left = `${left + 12}px`;
    }
  }
  document.addEventListener("keydown", function (e) {
    if (e.key === "ArrowLeft") {
      moveShipLeft();
    }
  });

  document.addEventListener("keydown", function (e) {
    if (e.key === "ArrowRight") {
      moveShipRight();
    }
  });