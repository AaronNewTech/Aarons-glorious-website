// Your code here
let windowWidth = window.innerWidth;

document.getElementById("bee").onmousedown = function(){
  const sound2 = document.createElement("audio");
        sound2.src = ("https://github.com/AaronNewTech/Aarons-glorious-website/blob/main/audio/Galaga_Kill_Enemy_Sound_Effect2.mp3?raw=true")
        function play() {
          sound2.play() 
        }
  setTimeout(play, 500);
};

document.getElementById("boss").onmousedown = function(){
  const sound2 = document.createElement("audio");
        sound2.src = ("https://github.com/AaronNewTech/Aarons-glorious-website/blob/main/audio/Galaga_Kill_Enemy_Sound_Effect2.mp3?raw=true")
        function play() {
          sound2.play() 
        }
  setTimeout(play, 500);
};

document.getElementById("butterfly").onmousedown = function(){
  const sound2 = document.createElement("audio");
        sound2.src = ("https://github.com/AaronNewTech/Aarons-glorious-website/blob/main/audio/Galaga_Kill_Enemy_Sound_Effect2.mp3?raw=true")
        function play() {
          sound2.play() 
        }
  setTimeout(play, 500);
};

// document.body.mousedown = function(e){
//     if (e.mousedown = true) {
//         const sound1 = document.createElement("audio");
//         sound1.src = ("https://github.com/AaronNewTech/Aarons-glorious-website/blob/main/audio/audio_Galaga_Kill_Enemy_Sound_Effect2.mp3?raw=true")
//         sound1.play();
//     }
// } 

// const sound1 = new Audio("https://github.com/AaronNewTech/Aarons-glorious-website/blob/main/audio/audio_Galaga_Kill_Enemy_Sound_Effect2.mp3?raw=true");

document.body.onkeyup = function(e){
    if (e.keyCode == 32) {
        const shoot1 = document.createElement("audio");
        shoot1.src = ("https://github.com/AaronNewTech/Aarons-glorious-website/blob/main/audio/Galaga_Firing_Sound_Effect2.mp3?raw=true")
        shoot1.play();
    }
} 

// const bee = document.getElementById("bee");
// element.addEventListener("click", myFunction);


document.body.onmousedown = function(e){
    if (e.onmousedown = true) {
        const shoot2 = document.createElement("audio");
        shoot2.src = ("https://github.com/AaronNewTech/Aarons-glorious-website/blob/main/audio/Galaga_Firing_Sound_Effect2.mp3?raw=true")
        shoot2.play();
    }
} 

const ship = document.getElementById("ship");

const onMouseMove = (e) =>{
  ship.style.left = e.pageX + 'px';
}

document.addEventListener('mousemove', onMouseMove);

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