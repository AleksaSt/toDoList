const form = document.querySelector(".formClass");
const input = document.querySelector(".inputClass");
const ul = document.querySelector(".ulClass");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  toDoList();
});

function toDoList() {
  let inputValue = input.value;
  const listElement = document.createElement("li");
  listElement.innerText = inputValue;
  ul.appendChild(listElement);
  inputValue = " ";
  const checkBox = document.createElement("div");
  checkBox.innerHTML = `<i class="fa-solid fa-check"></i
  >`;
  listElement.appendChild(checkBox);
  const trashCan = document.createElement("div");
  trashCan.innerHTML = `<i class="fa-solid fa-trash"></i>`;
  listElement.appendChild(trashCan);
}
