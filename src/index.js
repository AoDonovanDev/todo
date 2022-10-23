import './input.css';
import {domDisplay} from "./dombuilder.js";
import {projManager} from "./dombuilder.js";
let navBtns = document.querySelectorAll(".navBtn");
let taskName = document.getElementById("taskName");
let newTaskBtn = document.getElementById("newTaskBtn");
let newProjBtn = document.getElementById("newProjBtn");
window.addEventListener("load", taskSet);
navBtns.forEach(element => element.addEventListener("click", pageSelect));
newTaskBtn.addEventListener("click", taskCreate);
newProjBtn.addEventListener("click", projCreate);
export function pageSelect(){
    let navBtns = document.querySelectorAll(".navBtn");
    navBtns.forEach(element => element.classList.remove("active"));
    this.classList.add("active");
    taskController.project = this.id;
    domDisplay(taskController.taskList, taskController.project);
};
const newTask = function(project, taskName){
    this.taskName = taskName;
    this.project = project;
};
function taskSet(){
    if(localStorage.length !=0){
        taskController.taskList = JSON.parse(localStorage.getItem("saveState"));
        domDisplay(taskController.taskList, taskController.project);
    }
}
function taskCreate(){
    let taskObj = new newTask(taskController.project, taskName.value);
    taskController.taskList.push(taskObj);
    taskName.value = "";
    domDisplay(taskController.taskList, taskController.project);
    storageManager();
};
function projCreate(){
    projManager(document.getElementById("projName").value);
    document.getElementById("projName").value = "";
}
export function removeTask(){
    console.log("chill");
}
const taskController = (() => {
    const project = "today";
    const taskList = [];
    const taskRemove = (target) => taskList.splice(target, 1);
    return {
      project, taskList, taskRemove
    };
})();
function storageManager(){
    localStorage.setItem("saveState", JSON.stringify(taskController.taskList));
}

