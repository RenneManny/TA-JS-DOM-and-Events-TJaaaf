document.addEventListener("DOMContentLoaded", function () {
  const container = document.getElementById("container");

  // Create 500 boxes
  for (let i = 0; i < 500; i++) {
    const box = document.createElement("div");
    box.classList.add("box");
    box.textContent = getRandomNumber();
    container.appendChild(box);

    // Add event listener for mouseover
    box.addEventListener("mouseover", function () {
      box.style.backgroundColor = getRandomColor();
      box.textContent = getRandomNumber();
    });

    // Add event listener for mouseout
    box.addEventListener("mouseout", function () {
      box.style.backgroundColor = "";
    });
  }
});

// Function to generate a random color
function getRandomColor() {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

// Function to generate a random number from 0 to 500
function getRandomNumber() {
  return Math.floor(Math.random() * 501);
}
