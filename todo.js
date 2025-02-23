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

function CommonToAll(buttonNum) {
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

    if (buttonNum == 1) {
      listContainer.appendChild(li);
    } else if (buttonNum == 2) {
      if (arrayList[i] !== undefined && arrayList[i].marked) {
        listContainer.appendChild(li);
      }
    } else if (buttonNum == 3) {
      if (arrayList[i] !== undefined && !arrayList[i].marked) {
        listContainer.appendChild(li);
      }
    } else {
      listContainer.appendChild(li);
    }

    li.querySelector(".editTask").addEventListener("click", edit);

    li.querySelector(".dltTask").addEventListener("click", remove);
    function remove() {
      for (let j = 0; j < arrayList.length; j++) {
        //console.log(arrayList[j].id , Number(li.getAttribute("id")));
        if (
          arrayList[j] !== undefined &&
          arrayList[j].id === Number(li.getAttribute("id"))
        ) {
          console.log("hey");
          delete arrayList[j];
          break;
        }
      }
      li.remove();
    }

    function edit() {
      const ID = li.getAttribute("id");
      const btText = li.children[1].childNodes[0].innerText;
      const pp = li.children[1];

      if (btText === "Edit") {
        pp.childNodes[0].innerText = "Save";
        const inputText = document.createElement("input");
        inputText.value = li.children[0].innerText;
        li.innerHTML = "";
        inputText.classList.add("newTask");
        li.appendChild(inputText);
        li.appendChild(pp);
        console.log(li);
      } else {
        pp.childNodes[0].innerText = "Edit";
        let text = document.createElement("div");
        text.innerText = li.children[0].value;
        li.innerHTML = "";
        li.appendChild(text);
        li.appendChild(pp);
        for (let j = 0; j < arrayList.length; j++) {
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
    let flag = true;
    for (let j = 0; j < arrayList.length; j++) {
      if (
        arrayList[j] !== undefined &&
        arrayList[j].id === Number(e.target.getAttribute("id"))
      ) {
        arrayList[j].marked = true;
        break;
      }
    }
    for(let j=0; j<arrayList.length; j++)
    {
      if(arrayList[j] !== undefined && arrayList[j].marked === false)
      {
        flag = false;
        break;
      }
    }
    let btn = document.getElementById('btn5');
    if(flag)
    {
      btn.innerText = 'Unselect All';
    }
    else 
    {
      btn.innerText = 'Select All';
    }
  });
};

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

  CommonToAll(1);
}

document.querySelector("#btn1").addEventListener("click", (e) => {
  e.target.style.backgroundColor = "red";
  document.querySelector("#btn2").style.backgroundColor = "#5c67f2";
  document.querySelector("#btn3").style.backgroundColor = "#5c67f2";
  document.querySelector("#btn4").style.backgroundColor = "#5c67f2";
  document.querySelector("#btn5").style.backgroundColor = "#5c67f2";
});

document.querySelector("#btn2").addEventListener("click", (e) => {
  e.target.style.backgroundColor = "red";
  document.querySelector("#btn1").style.backgroundColor = "#5c67f2";
  document.querySelector("#btn3").style.backgroundColor = "#5c67f2";
  document.querySelector("#btn4").style.backgroundColor = "#5c67f2";
  document.querySelector("#btn5").style.backgroundColor = "#5c67f2";
});

document.querySelector("#btn3").addEventListener("click", (e) => {
  e.target.style.backgroundColor = "red";
  document.querySelector("#btn1").style.backgroundColor = "#5c67f2";
  document.querySelector("#btn2").style.backgroundColor = "#5c67f2";
  document.querySelector("#btn4").style.backgroundColor = "#5c67f2";
  document.querySelector("#btn5").style.backgroundColor = "#5c67f2";
});

document.querySelector("#btn4").addEventListener("click", (e) => {
  e.target.style.backgroundColor = "red";
  document.querySelector("#btn2").style.backgroundColor = "#5c67f2";
  document.querySelector("#btn3").style.backgroundColor = "#5c67f2";
  document.querySelector("#btn1").style.backgroundColor = "#5c67f2";
  document.querySelector("#btn5").style.backgroundColor = "#5c67f2";
});

document.querySelector("#btn5").addEventListener("click", (e) => {
  e.target.style.backgroundColor = "red";
  document.querySelector("#btn1").style.backgroundColor = "#5c67f2";
  document.querySelector("#btn2").style.backgroundColor = "#5c67f2";
  document.querySelector("#btn3").style.backgroundColor = "#5c67f2";
  document.querySelector("#btn4").style.backgroundColor = "#5c67f2";
});

function allCompleted() {
  const listContainer = document.getElementById("all-task");
  listContainer.innerHTML = "";
  CommonToAll(2);
}

function remaining() {
  const listContainer = document.getElementById("all-task");
  listContainer.innerHTML = "";
  CommonToAll(3);
}

function clearCompleted() {
  for (let i = 0; i < arrayList.length; i++) {
    if (arrayList[i] !== undefined && arrayList[i].marked) {
      delete arrayList[i];
    }
  }
  CommonToAll(1);
}

function selectAll(){
  let btn = document.getElementById('btn5');
  let flag = true;
  if(btn.innerText === 'Select All')
  {
    btn.innerText = 'Unselect All';
  }
  else 
  {
    btn.innerText = 'Select All';
    flag = false;
  }
  for (let i = 0; i < arrayList.length; i++) {
    if (arrayList[i] !== undefined) {
      if(flag)
      {
        arrayList[i].marked = true;
      }
      else 
      {
        arrayList[i].marked = false;
      }
    }
  }
  CommonToAll(1);
}

function showAll() {
  taskAdd(2);
}
