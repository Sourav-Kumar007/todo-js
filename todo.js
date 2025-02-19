// const newTask = document.getElementById("input-box");
// const listContainer = document.getElementById("all-task");

// function taskAdd() {
//   if (newTask.value.trim() === "") {
//     alert("Invalid Task");
//   } else {
//     let li = document.createElement("li");
//     li.textContent = newTask.value;

//     let deleteBtn = document.createElement("button");
//     deleteBtn.textContent = "Delete";
//     deleteBtn.classList.add("delete-btn");

//     li.appendChild(deleteBtn);
//     listContainer.appendChild(li);

//     newTask.value = "";
//   }
// }

// listContainer.addEventListener("click", function (e) {
//   if (e.target.classList.contains("delete-btn")) {
//     e.target.parentElement.remove();
//   }
// });

// listContainer.addEventListener("click", function (e) {
//    e.target.style.color = "green";
//    e.target.classList.add("completed");
//   }); 

// //  function allCompleted()
// //  {
// //     console.log('hello');
// //     for(let e in listContainer)
// //     {
// //         console.log(e.target.value);
// //     }
// //  } 
// function allCompleted() {
//     let tasks = listContainer.getElementsByTagName("li");
//     let completedTasks = [];
    
//     // for (let task of tasks) { 
//     //     if (task.classList.contains("completed")) { 
//     //         completedTasks.push(task);
//     //     }
//     // }
    
//     // let newContainer = document.getElementById("all-task");
//     // completedTasks.forEach(task => newContainer.appendChild(task));

//     // newContainer.forEach(task => listContainer.removeChild(task));
//     // newContainer.forEach(task => listContainer.appendChild(task));

//     for(let task of tasks)
//     {
//         if (task.classList.contains("completed")) { 
//                     continue;
//                 }
//                 else 
//                 {
//                     listContainer.removeChild(task);
//                 }
//     }
// }


const arrayList = [];
const obj = {
  id : Date.now(),
  task : "dummy",
  marked : true
};


function taskAdd(f)
{
  if(f == 1)
  {
    const newInput = document.getElementById("input-box");
  const newTask = Object.create(obj);
  if(newInput.value == "")
  {
    return ;
  }
  newTask.task = newInput.value ;
  newTask.marked = false;
  newTask.id = Date.now();
  newInput.value = "";
  arrayList.push(newTask);
  }
  const listContainer = document.getElementById("all-task");
  listContainer.innerHTML = "";
  for(let i=0; i<arrayList.length; i++)
  {

    let li = document.createElement("li");
    li.innerHTML = arrayList[i].task;
    li.setAttribute("id" , `${arrayList[i].id}`);
    if(arrayList[i].marked)
    {
      li.style.color = "green";
    }

    let deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    li.appendChild(deleteBtn);
    listContainer.appendChild(li);


    li.querySelector("button").addEventListener("click" , remove);
    function remove()
    {
      for(j=0; j<arrayList.length; j++)
      {
        //console.log(arrayList[j].id , Number(li.getAttribute("id")));
        if(arrayList[j].id === Number(li.getAttribute("id")))
        {
          delete arrayList[j];
          break;
        }
      }
      li.remove();
    }
  }
  listContainer.addEventListener("click" , function(e){
    e.target.style.color = "green";
    for(j=0; j<arrayList.length; j++)
      {
        //console.log(arrayList[j].id , Number(li.getAttribute("id")));
        if(arrayList[j].id === Number(e.target.getAttribute("id")))
        {
          arrayList[j].marked = true;
          break;
        }
      }
  });
  //console.log(arrayList);
}

function allCompleted(){
  const listContainer = document.getElementById("all-task");
  listContainer.innerHTML = "";
  for(let i=0; i<arrayList.length; i++)
  {
    if(arrayList[i].task !== undefined && arrayList[i].marked)
    {
      let li = document.createElement("li");
      li.innerHTML = arrayList[i].task;
      li.setAttribute("id" , `${arrayList[i].id}`);
      li.style.color = "green";
      listContainer.appendChild(li);
    }
  }
}

function remaining(){
  const listContainer = document.getElementById("all-task");
  listContainer.innerHTML = "";
  for(let i=0; i<arrayList.length; i++)
  {
    if(arrayList[i].task !== undefined && arrayList[i].marked === false)
    {
      let li = document.createElement("li");
      li.innerHTML = arrayList[i].task;
      li.setAttribute("id" , `${arrayList[i].id}`);
      listContainer.appendChild(li);
    }
  }
}

function clearCompleted(){
  const listContainer = document.getElementById("all-task");
  listContainer.innerHTML = "";
  for(let i=0; i<arrayList.length; i++)
  {
    if(arrayList[i].marked)
    {
      delete arrayList[i];
    }
  }
  for(let i=0; i<arrayList.length; i++)
  {
    if(arrayList[i] !== undefined)
    {
      let li = document.createElement("li");
      li.innerHTML = arrayList[i].task;
      li.setAttribute("id" , `${arrayList[i].id}`);
      listContainer.appendChild(li);
    }
  }
}

function showAll(){
  taskAdd(2);
}

