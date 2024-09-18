let gToDoList = [
    {
        id : makeId(),
        task : "baba",
        isDone: false,
    }
];


const elForm = document.querySelector("form");
elForm.addEventListener("submit" , function (ev) {
    ev.preventDefault();
    const taskValue = elForm.querySelector("#task").value;

    createTask(taskValue);
})

function makeId() {
    let id = "";
    const possible =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    for (let i = 0; i < 5; i++) {
      id += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    return id;
  }



  function renderToDoList(){
    const elToDoLIst = document.getElementById("toDoList");

    for(let i = 0; i < gToDoList.length; i++){
        const task = gToDoList[i];
        const elTask = document.createElement("li");
        elTask.setAttribute("id" , "el" + task.id);

        elTask.innerHTML = `
        <div>${task.task}</div>
        <button onclick="deleteTask('${task.id}')">Delete</button>
        `;
        elToDoLIst.appendChild(elTask);
    }
  }


function deleteTask(taskId){
    const newToDoList = [];

    for (let i = 0; i < gToDoList.length; i++) {
        const task = gToDoList[i];
        
        if(task.id != taskId){
            newToDoList.push(task)
        }
    }
    gToDoList = newToDoList;

    const elToDoLIst = document.getElementById("toDoList");
    const elTaskToDelete = elToDoLIst.querySelector("#el" + taskId);
    elToDoLIst.removeChild(elTaskToDelete);
}

function createTask(task){
    const newTask = {
        id: makeId(),
        task: task,
        isDone: false
    };

    gToDoList.push(newTask);
    const elToDoLIst = document.getElementById("toDoList");
    elToDoLIst.innerHTML = "";
    renderToDoList();
}

renderToDoList();