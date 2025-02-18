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
   e.target.classList.add("completed");
  }); 

//  function allCompleted()
//  {
//     console.log('hello');
//     for(let e in listContainer)
//     {
//         console.log(e.target.value);
//     }
//  } 
function allCompleted() {
    let tasks = listContainer.getElementsByTagName("li");
    let completedTasks = [];
    
    for (let task of tasks) { 
        if (task.classList.contains("completed")) { 
            completedTasks.push(task);
        }
    }
    
    let newContainer = document.getElementById("all-task");
    completedTasks.forEach(task => newContainer.appendChild(task));

    newContainer.forEach(task => listContainer.removeChild(task));
    newContainer.forEach(task => listContainer.appendChild(task));
}



  