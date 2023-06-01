// Your code here
let windowWidth = window.innerWidth; 

var audio = document.getElementById('sound1');

setTimeout(function() {
    audio.play();
}, 3000);

const ship = document.getElementById("ship");

document.addEventListener('mousemove', function(e) {
  let body = document.querySelector('body');
  let shipFollow = document.getElementById('ship');
  let left = e.offsetX;
  // let top = e.offsetY;
  ship.style.left = left + 'px';
  // ship.style.top = top + 'px';
});

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