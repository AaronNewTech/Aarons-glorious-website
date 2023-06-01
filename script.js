// Your code here
let windowWidth = window.innerWidth; 

const sound1 = new Audio("https://github.com/AaronNewTech/Aarons-glorious-website/blob/main/audio/Galaga_Kill_Enemy_Sound_Effect.mp3?raw=true");

document.body.onkeyup = function(e){
    if(e.keyCode == 32){
        const shoot = document.createElement("audio");
        shoot.src = ("https://github.com/AaronNewTech/Aarons-glorious-website/blob/main/audio/Galaga_Firing_Sound_Effect.mp3?raw=true")
        shoot.play();
    }
} 

const ship = document.getElementById("ship");

document.addEventListener('mousemove', function(e) {
  let body = document.querySelector('body');
  let shipFollow = document.getElementById('ship');
  let left = e.offsetX;
  ship.style.left = left + 'px';
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