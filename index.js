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
  const checkBoxIcon = document.createElement("div");
  checkBoxIcon.innerHTML = `<i class="fa-solid fa-check"></i
  >`;
  listElement.appendChild(checkBoxIcon);
  const trashCanIcon = document.createElement("div");
  trashCanIcon.innerHTML = `<i class="fa-solid fa-trash"></i>`;
  listElement.appendChild(trashCanIcon);

  checkBoxIcon.addEventListener("click", () => {
    listElement.classList.toggle("checked");
  });

  trashCanIcon.addEventListener("click", () => {
    listElement.remove();
  });
}
