let form = document.querySelector("form");
let modal = document.querySelector(".modal_overlay");
let modal_info = document.querySelector(".modal_info");
let userData = {};
form.addEventListener("submit", (event) => {
  event.preventDefault();
  let elements = event.target.elements;

  userData.name = elements.name.value;
  userData.email = elements.email.value;
  userData.choice = elements.gender.value;
  userData.color = elements.color.value;
  userData.inspection = elements.color.value;
  userData.review = elements.range.value;
  userData.terms = elements.terms.checked;
  modal.classList.add("open");

  let close = document.querySelector(".modal_close");
  close.addEventListener("click", () => {
    modal.classList.remove("open");
  });
  displayInfo(userData);
});
function displayInfo(data = {}) {
  modal_info.innerHTML = "";
  let name = document.createElement("h1");
  name.innerText = `hello ${data.name}`;
  let email = document.createElement("p");
  email.innerText = `Your email is  ${data.email}`;
  let choice = document.createElement("p");
  choice.innerText = `You love ${data.choice}`;
  let color = document.createElement("p");
  color.innerText = `your color is  ${data.color}`;
  let review = document.createElement("p");
  review.innerText = `you rated ${data.review}`;
  let terms = document.createElement("p");
  terms.innerText = document.createElement("p");
  terms.innerText = `${
    data.terms
      ? "you have accepted terms and conditions"
      : "you have not accepted the terms and conditions."
  }`;
  modal_info.append(name);
  modal_info.append(email);
  modal_info.append(choice);
  modal_info.append(color);
  modal_info.append(review);
  modal_info.append(terms);
}
