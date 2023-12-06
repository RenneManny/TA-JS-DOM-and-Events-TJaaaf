const colors = [];

for (let i = 0; i < 10; i++) {
  const randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
  colors.push(randomColor);
}

let one=document.querySelector(".first");
let button=document.querySelector("p");
button.addEventListener("click",function(){
    one.style.backgroundColor=colors[0];
})

// box2
let second=document.querySelector(".second");
let button2=document.querySelector(".snd");
button2.addEventListener("mousemove",function(){
    second.style.backgroundColor=colors[0];
})