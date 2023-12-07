let boxOne = document.querySelector(".first");
let boxTwo = document.querySelector(".second");
// generating random color
function generateRandomColor() {
  let hexChars = [
    "0",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
  ];
  let color = "#";
  for (let i = 0; i < 6; i++) {
    let randomNumber = Math.floor(Math.random() * 16);
    color = color + hexChars[randomNumber];
  }
  return color;
}

function handleClick() {
  let randomCol = generateRandomColor();
  boxOne.style.backgroundColor = randomCol;
}
function handleMousemove() {
  let randomCol = generateRandomColor();
  boxTwo.style.backgroundColor = randomCol;
}

boxOne.addEventListener("click", handleClick);
boxTwo.addEventListener("mousemove", handleMousemove);
