import './input.css';
import { domDisplay, projManager, removeAllChildNodes } from './dombuilder.js';

const navBtns = document.querySelectorAll('.navBtn');
const taskName = document.getElementById('taskName');
const newTaskBtn = document.getElementById('newTaskBtn');
const newProjBtn = document.getElementById('newProjBtn');
window.addEventListener('load', taskSet);
navBtns.forEach((element) => element.addEventListener('click', pageSelect));
 newTaskBtn.addEventListener('click', taskCreate); 
newProjBtn.addEventListener('click', projCreate);
const taskController = (() => {
  const project = 'Today';
  const taskList = [];
  const taskRemove = (target) => taskController.taskList.splice(target, 1);
  return {
    project, taskList, taskRemove,
};
})();
function saveState() {
  localStorage.setItem('saveState', JSON.stringify(taskController.taskList));
}
export function pageSelect() {
  const navBtns = document.querySelectorAll('.navBtn');
  navBtns.forEach((element) => element.classList.remove('active'));
  this.classList.add('active');
  taskController.project = this.id;
  domDisplay(taskController.taskList, taskController.project);
}
const NewTask = function (project, task) {
  this.taskName = task;
  this.project = project;
};
function taskSet() {
  function removeDuplicates(arr) {
    return [...new Set(arr)];
  }
  if (localStorage.length > 0) {
    taskController.taskList = JSON.parse(localStorage.getItem('saveState'));
    domDisplay(taskController.taskList, taskController.project);
    const listT = [];
    for (let i = 0; i < taskController.taskList.length; i++) {
      listT.push(taskController.taskList[i].project);
    }
    removeAllChildNodes(document.getElementById('projQ'));
    const newNav = removeDuplicates(listT);
    newNav.forEach((element) => projManager(element));
  }
}
function taskCreate() {
  if(taskName.value != ""){
  const taskObj = new NewTask(taskController.project, taskName.value);
  taskController.taskList.push(taskObj);
  taskName.value = '';
  domDisplay(taskController.taskList, taskController.project);
  saveState();
  taskSet();
  }
  newTaskBtn.classList.add("btnBump");
  document.addEventListener("animationend", bump);
  function bump(){
    document.getElementById("xout").click();
    document.removeEventListener("animationend", bump, false);
  }
}
function projCreate() {
  if(document.getElementById('projName').value != ""){
  projManager(document.getElementById('projName').value);
  document.getElementById('projName').value = '';
  }
}
export function removeTask() {
  this.classList.add("fadey");
  const taskText = document.getElementById(this.dataset.label);
  taskText.addEventListener("animationend", updateDom);
  taskText.classList.add("taskComplete");
  const isMatch = (element) => element.taskName === this.dataset.label;
  const listIndex = taskController.taskList.findIndex(isMatch);
  taskController.taskRemove(listIndex);
  saveState();
  function updateDom(){
    domDisplay(taskController.taskList, taskController.project);
  }
}