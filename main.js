const inputBox = document.getElementById("input-box");
const taskList = document.getElementById("list-tasks")
const tasksContainer = document.getElementById("list-container");


function addTask(){
    let taskValue = inputBox.value
    if(taskValue === ""){
        alert("Please you must write something!")
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = taskValue
        taskList.appendChild(li)
        let span = document.createElement("span")
        span.innerHTML = "\u00d7"
        li.appendChild(span)
        
    }
    inputBox.value = ''
    saveData()
}

tasksContainer.addEventListener("click",function(e){
   if(e.target.tagName === "LI"){
     e.target.classList.toggle("checked")
   }
   else if (e.target.tagName === "SPAN"){
    e.target.parentElement.remove()
   }
   saveData()
},false)


function saveData(){
    localStorage.setItem("data",taskList.innerHTML)
}

function getData(){
    console.log(localStorage.getItem("data"))
    taskList.innerHTML = localStorage.getItem("data")
}

getData()