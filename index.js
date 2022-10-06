const form = document.querySelector(".form");
const input = document.querySelector(".input");
const ul = document.querySelector(".list");

let listArray = JSON.parse(localStorage.getItem("list"));

listArray.forEach(function (element) {
  toDoList(element);
});

form.addEventListener("submit", (event) => {
  event.preventDefault();
  toDoList();
});

function toDoList(element) {
  let inputValue = input.value;
  if (element) {
    inputValue = element.name;
  }
  const listElement = document.createElement("li");
  if (element && element.checked) {
    listElement.classList.add("checked");
  }
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
    addToLocalStorage();
  });

  trashCanIcon.addEventListener("click", () => {
    listElement.remove();
    addToLocalStorage();
  });

  addToLocalStorage();
}

function addToLocalStorage() {
  const liElements = document.querySelectorAll("li");
  listArray = [];
  liElements.forEach(function (element) {
    listArray.push({
      name: element.innerText,
      checked: element.classList.contains("checked"),
    });
  });

  localStorage.setItem("list", JSON.stringify(listArray));
}
