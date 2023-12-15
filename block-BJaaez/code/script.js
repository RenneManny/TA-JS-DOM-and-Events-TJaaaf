function main() {
  let inputTask = document.querySelector("#task-input");
  let root = document.querySelector("ul");
  let allTasks = JSON.parse(localStorage.getItem("tasks")) || [];

  function handleTask(event) {
    let value = event.target.value;
    if (event.keyCode == "13" && value !== "") {
      let task = {
        name: value,
        isDone: false,
      };
      allTasks.push(task);
      event.target.value = "";
      createUi();
    }
    localStorage.setItem("tasks", JSON.stringify(allTasks));
  }
  // handle toggle
  function handleToggle(event) {
    let id = event.target.dataset.id;
    allTasks[id].isDone = !allTasks[id].isDone;
    localStorage.setItem("tasks", JSON.stringify(allTasks));
    createUi();
  }
  // delete function

  function delFun(event) {
    let id = event.target.dataset.id;
    allTasks.splice(id, 1);
    localStorage.setItem("tasks", JSON.stringify(allTasks));
    createUi();
  }
  // creating ui
  function createUi() {
    root.innerHTML = "";
    allTasks.forEach((task, index) => {
      let li = document.createElement("li");
      let input = document.createElement("input");
      input.type = "checkbox";
      input.addEventListener("change", handleToggle);
      input.checked = task.isDone;
      input.setAttribute("data-id", index);

      let p = document.createElement("p");
      p.innerText = task.name;
      if (task.isDone) {
        p.classList.add("completed");
      }

      let icon = document.createElement("i");
      icon.classList.add("fas", "fa-trash", "trashcol");
      icon.addEventListener("click", delFun);
      icon.setAttribute("data-id", index);
      li.append(p, input, icon);
      root.append(li);
    });
  }
  inputTask.addEventListener("keyup", handleTask);
}
main();
