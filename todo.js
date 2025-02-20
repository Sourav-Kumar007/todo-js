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
// const e = Object.create(obj);
// e.id = 1;
// e.task = "sourav";
// marked = true;
// arrayList.push(e);
// delete arrayList[0];
// if(arrayList[0] === undefined)
// {
//   console.log("You are right");
// }
// active button added

const arrayList = [];
const obj = {
  id: Date.now(),
  task: "dummy",
  marked: true,
};

document.querySelector("#input-box").addEventListener("keypress", function (e) {
  if (e.key === "Enter") {
    taskAdd(1);
  }
});

function taskAdd(f) {
  if (f == 1) {
    const newInput = document.getElementById("input-box");
    const newTask = Object.create(obj);
    if (newInput.value == "") {
      return;
    }
    newTask.task = newInput.value;
    newTask.marked = false;
    newTask.id = Date.now();
    newInput.value = "";
    arrayList.push(newTask);
  }
  const listContainer = document.getElementById("all-task");
  listContainer.innerHTML = "";
  for (let i = 0; i < arrayList.length; i++) {
    if (arrayList[i] === undefined) {
      continue;
    }

    let li = document.createElement("li");
    let text = document.createElement("div");
    text.innerHTML = arrayList[i].task;
    li.setAttribute("id", `${arrayList[i].id}`);
    if (arrayList[i].marked) {
      li.style.backgroundColor = "#C0E49A";
    }
    li.appendChild(text);

    let btnContainer = document.createElement("div");

    let editBtn = document.createElement("button");
    editBtn.textContent = "Edit";
    editBtn.classList.add("editTask");

    let deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.classList.add("dltTask");
    
    btnContainer.appendChild(editBtn);
    btnContainer.appendChild(deleteBtn);
    li.appendChild(btnContainer);
    listContainer.appendChild(li);

    li.querySelector(".editTask").addEventListener("click" , edit);

    li.querySelector(".dltTask").addEventListener("click", remove);
    function remove() {
      for (let j = 0; j < arrayList.length; j++) {
        //console.log(arrayList[j].id , Number(li.getAttribute("id")));
        if (
          arrayList[j] !== undefined &&
          arrayList[j].id === Number(li.getAttribute("id"))
        ) { 
          console.log('hey');
          delete arrayList[j];
          break;
        }
      }
      li.remove();
    }


    function edit (){

      const ID = li.getAttribute("id");
      const btText=li.children[1].childNodes[0].innerText;
      const pp=li.children[1];

      if(btText==="Edit")
      {
        pp.childNodes[0].innerText="Save";
        const inputText=document.createElement("input");
        inputText.value=li.children[0].innerText;
        li.innerHTML="";
        inputText.classList.add("newTask");
        li.appendChild(inputText);
        li.appendChild(pp);
        console.log(li);
      }
      else{

        pp.childNodes[0].innerText="Edit";
        let text = document.createElement("div");
        text.innerText = li.children[0].value;
        li.innerHTML="";
        li.appendChild(text);
        li.appendChild(pp);
        for(let j=0; j<arrayList.length; j++)
        {
          if (
            arrayList[j] !== undefined &&
            arrayList[j].id === Number(li.getAttribute("id"))
          ) {
            arrayList[j].task = li.children[0].innerText;
            break;
          }
        }
      }
    }
  }


  listContainer.addEventListener("click", function (e) {
    e.target.style.backgroundColor = "#C0E49A";
    for (j = 0; j < arrayList.length; j++) {
      //console.log(arrayList[j].id , Number(li.getAttribute("id")));
      if (
        arrayList[j] !== undefined &&
        arrayList[j].id === Number(e.target.getAttribute("id"))
      ) {
        arrayList[j].marked = true;
        break;
      }
    }
  });
  //console.log(arrayList);
}

document.querySelector("#btn1").addEventListener("click", (e) => {
  e.target.style.backgroundColor = "red";
  document.querySelector("#btn2").style.backgroundColor = "#5c67f2";
  document.querySelector("#btn3").style.backgroundColor = "#5c67f2";
  document.querySelector("#btn4").style.backgroundColor = "#5c67f2";
});

document.querySelector("#btn2").addEventListener("click", (e) => {
  e.target.style.backgroundColor = "red";
  document.querySelector("#btn1").style.backgroundColor = "#5c67f2";
  document.querySelector("#btn3").style.backgroundColor = "#5c67f2";
  document.querySelector("#btn4").style.backgroundColor = "#5c67f2";
});

document.querySelector("#btn3").addEventListener("click", (e) => {
  e.target.style.backgroundColor = "red";
  document.querySelector("#btn1").style.backgroundColor = "#5c67f2";
  document.querySelector("#btn2").style.backgroundColor = "#5c67f2";
  document.querySelector("#btn4").style.backgroundColor = "#5c67f2";
});

document.querySelector("#btn4").addEventListener("click", (e) => {
  e.target.style.backgroundColor = "red";
  document.querySelector("#btn2").style.backgroundColor = "#5c67f2";
  document.querySelector("#btn3").style.backgroundColor = "#5c67f2";
  document.querySelector("#btn1").style.backgroundColor = "#5c67f2";
});

function allCompleted() {
  const listContainer = document.getElementById("all-task");
  listContainer.innerHTML = "";
  // for(let i=0; i<arrayList.length; i++)
  // {
  //   if(arrayList[i] !== undefined && arrayList[i].marked)
  //   {
  //     let li = document.createElement("li");
  //     li.innerHTML = arrayList[i].task;
  //     li.setAttribute("id" , `${arrayList[i].id}`);
  //     li.style.backgroundColor = '#C0E49A';
  //     listContainer.appendChild(li);
  //   }
  // }
  console.log('-------');
  for (let i = 0; i < arrayList.length; i++) {
    if (arrayList[i] === undefined) {
      continue;
    }

    let li = document.createElement("li");
    li.innerHTML = arrayList[i].task;
    li.setAttribute("id", `${arrayList[i].id}`);
    if (arrayList[i].marked) {
      li.style.backgroundColor = "#C0E49A";
    }

    let deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    li.appendChild(deleteBtn);
    console.log(arrayList[i].task);
    if(arrayList[i].marked)
    {
      listContainer.appendChild(li);
    }

    li.querySelector("button").addEventListener("click", remove);
    function remove() {
      for (j = 0; j < arrayList.length; j++) {
        //console.log(arrayList[j].id , Number(li.getAttribute("id")));
        if (
          arrayList[j] !== undefined &&
          arrayList[j].id === Number(li.getAttribute("id"))
        ) {
          delete arrayList[j];
          break;
        }
      }
      li.remove();
    }
  }

  
}

function remaining() {
  const listContainer = document.getElementById("all-task");
  listContainer.innerHTML = "";
  // for (let i = 0; i < arrayList.length; i++) {
  //   if (arrayList[i] !== undefined && arrayList[i].marked === false) {
  //     let li = document.createElement("li");
  //     li.innerHTML = arrayList[i].task;
  //     li.setAttribute("id", `${arrayList[i].id}`);
  //     listContainer.appendChild(li);
  //   }
  // }
  for (let i = 0; i < arrayList.length; i++) {
    if (arrayList[i] === undefined) {
      continue;
    }

    let li = document.createElement("li");
    li.innerHTML = arrayList[i].task;
    li.setAttribute("id", `${arrayList[i].id}`);
    if (arrayList[i].marked) {
      li.style.backgroundColor = "#C0E49A";
    }

    let deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    li.appendChild(deleteBtn);
    console.log(arrayList[i].task);
    if(!arrayList[i].marked)
    {
      listContainer.appendChild(li);
    }

    li.querySelector("button").addEventListener("click", remove);
    function remove() {
      for (j = 0; j < arrayList.length; j++) {
        //console.log(arrayList[j].id , Number(li.getAttribute("id")));
        if (
          arrayList[j] !== undefined &&
          arrayList[j].id === Number(li.getAttribute("id"))
        ) {
          delete arrayList[j];
          break;
        }
      }
      li.remove();
    }
  }
}

function clearCompleted() {
  const listContainer = document.getElementById("all-task");
  listContainer.innerHTML = "";
  for (let i = 0; i < arrayList.length; i++) {
    if (arrayList[i] !== undefined && arrayList[i].marked) {
      delete arrayList[i];
    }
  }
  for (let i = 0; i < arrayList.length; i++) {
    if (arrayList[i] === undefined) {
      continue;
    }

    let li = document.createElement("li");
    li.innerHTML = arrayList[i].task;
    li.setAttribute("id", `${arrayList[i].id}`);
    if (arrayList[i].marked) {
      li.style.backgroundColor = "#C0E49A";
    }

    let deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    li.appendChild(deleteBtn);
    console.log(arrayList[i].task);
    listContainer.appendChild(li);

    li.querySelector("button").addEventListener("click", remove);
    function remove() {
      for (j = 0; j < arrayList.length; j++) {
        //console.log(arrayList[j].id , Number(li.getAttribute("id")));
        if (
          arrayList[j] !== undefined &&
          arrayList[j].id === Number(li.getAttribute("id"))
        ) {
          delete arrayList[j];
          break;
        }
      }
      li.remove();
    }
  }
}

function showAll() {
  taskAdd(2);
}
