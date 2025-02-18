const newTask = document.getElementById("input-box");
const listContainer = document.getElementById("all-task");

function taskAdd() {
  if (newTask.value.trim() === "") {
    alert("Invalid Task");
  } else {
    let li = document.createElement("li");
    li.textContent = newTask.value;

    let deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.classList.add("delete-btn");

    li.appendChild(deleteBtn);
    listContainer.appendChild(li);
    console.log(li);

    newTask.value = "";
  }
}

listContainer.addEventListener("click", function (e) {
  if (e.target.classList.contains("delete-btn")) {
    e.target.parentElement.remove();
  }
});

listContainer.addEventListener("click", function (e) {
   e.target.style.color = "green";
  });
  