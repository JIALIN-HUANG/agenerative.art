//change the background and theme color
//clicking on White
let whiteCircle = document.querySelector(".white-circle");
function turnWhite() {
  // document.body.style.background = "white";
  // document.body.style.color = "black";
  document.body.classList.remove("dots");
  document.body.classList.add("dotsShow");
  document.body.style.backgroundImage =
    "radial-gradient(black 2.5px, white 0px)";

  for (let i = 0; i < nodeList.length; i++) {
    nodeList[i].style.color = "black";
  }

  for (let i = 0; i < rectangle.length; i++) {
    rectangle[i].classList.remove("rectangleBlack");
    rectangle[i].classList.add("rectangle");
  }
}
whiteCircle.addEventListener("click", turnWhite);

//clicking on black
let nodeList = document.getElementsByTagName("a");
let blackCircle = document.querySelector(".black-circle");
let rectangle = document.querySelectorAll(".rectangle");

function turnBlack() {
  // document.body.style.background = "black";
  // document.body.style.color = "white";
  document.body.classList.add("dots");
  document.body.classList.remove("dotsShow");
  document.body.style.backgroundImage =
    "radial-gradient(white 2.5px, black 0px)";

  for (let i = 0; i < nodeList.length; i++) {
    nodeList[i].style.color = "white";
  }

  for (let i = 0; i < rectangle.length; i++) {
    rectangle[i].classList.add("rectangleBlack");
    rectangle[i].classList.remove("rectangle");
  }
}

console.log(rectangle);

blackCircle.addEventListener("click", turnBlack);
