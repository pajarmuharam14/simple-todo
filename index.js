const form = document.querySelector("#task-form");
const input = document.querySelector("#task-input");
const tasksList = document.querySelector("#tasks");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const task = input.value;
  // CREATE PARRENT DIV
  const taskEl = document.createElement("div");
  taskEl.classList.add("task");
  // CREATE CHILD DIV
  const taskContentEl = document.createElement("div");
  taskContentEl.classList.add("content");
  taskEl.appendChild(taskContentEl);
  // CREATE INPUT
  const taksInputEl = document.createElement("input");
  taksInputEl.classList.add("text");
  taksInputEl.type = "text";
  taksInputEl.value = task;
  taksInputEl.setAttribute("readonly", "readonly");

  taskContentEl.appendChild(taksInputEl);
  // CREATE DIV BUTTON
  const divButtonEl = document.createElement("div");
  divButtonEl.classList.add("action");

  const buttonEditEl = document.createElement("button");
  buttonEditEl.classList.add("edit");
  buttonEditEl.innerText = "edit";

  const buttonDeleteEl = document.createElement("button");
  buttonDeleteEl.classList.add("delete");
  buttonDeleteEl.innerText = "delete";

  divButtonEl.appendChild(buttonEditEl);
  divButtonEl.appendChild(buttonDeleteEl);

  taskEl.appendChild(divButtonEl);
  tasksList.appendChild(taskEl);
  input.value = "";

  buttonEditEl.addEventListener("click", () => {
    if (buttonEditEl.innerText.toLowerCase() == "edit") {
      buttonEditEl.innerText = "save";
      taksInputEl.removeAttribute("readonly");
      taksInputEl.focus();
    } else {
      buttonEditEl.innerText = "edit";
      taksInputEl.setAttribute("readonly", "readonly");
    }
  });
  buttonDeleteEl.addEventListener("click", () => {
    tasksList.removeChild(taskEl);
  });
});
