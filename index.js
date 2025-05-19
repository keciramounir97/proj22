const names = [];
const form = document.getElementById("nameForm");
const input = document.getElementById("nameInput");
const list = document.getElementById("nameList");

form.addEventListener("submit", function (event) {
  event.preventDefault();
  const inputname = input.value.trim();

  if (inputname === "") return;

  names.push(inputname);

  const item = document.createElement("li");
  item.textContent = inputname + " ";
  item.dataset.name = inputname; // store original name

  const editBtn = document.createElement("button");
  editBtn.textContent = "Edit";
  editBtn.onclick = function () {
    const newName = prompt("Edit task:", item.dataset.name);
    if (newName) {
      item.firstChild.textContent = newName + " ";
      names[names.indexOf(item.dataset.name)] = newName;
      item.dataset.name = newName; // update stored name
    }
  };

  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "Delete";
  deleteBtn.onclick = function () {
    list.removeChild(item);
    const index = names.indexOf(item.dataset.name);
    if (index > -1) names.splice(index, 1);
  };

  const btnContainer = document.createElement("div");
  btnContainer.style.display = "inline-block";
  btnContainer.style.marginLeft = "10px";
  btnContainer.appendChild(editBtn);
  btnContainer.appendChild(deleteBtn);

  item.appendChild(btnContainer);
  list.appendChild(item);
  input.value = "";
});

