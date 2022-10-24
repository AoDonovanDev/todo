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
export function pageSelect() {
  const navBtns = document.querySelectorAll('.navBtn');
  navBtns.forEach((element) => element.classList.remove('active'));
  this.classList.add('active');
  taskController.project = this.id;
  domDisplay(taskController.taskList, taskController.project);
}
const newTask = function (project, taskName) {
  this.taskName = taskName;
  this.project = project;
};
function taskSet() {
  if (localStorage.length > 0) {
    taskController.taskList = JSON.parse(localStorage.getItem('saveState'));
    domDisplay(taskController.taskList, taskController.project);
    const listT = [];
    for (let i = 0; i < taskController.taskList.length; i++) {
      listT.push(taskController.taskList[i].project);
    }
    function removeDuplicates(arr) {
      return [...new Set(arr)];
    }
    removeAllChildNodes(document.getElementById('projQ'));
    const newNav = removeDuplicates(listT);
    newNav.forEach((element) => projManager(element));
  }
}
function taskCreate() {
  const taskObj = new newTask(taskController.project, taskName.value);
  taskController.taskList.push(taskObj);
  taskName.value = '';
  domDisplay(taskController.taskList, taskController.project);
  console.log(taskController.taskList);
  storageManager();
  taskSet();
}
function projCreate() {
  projManager(document.getElementById('projName').value);
  document.getElementById('projName').value = '';
}
export function removeTask() {
  const isMatch = (element) => element.taskName === this.dataset.label;
  const listIndex = taskController.taskList.findIndex(isMatch);
  taskController.taskRemove(listIndex);
  domDisplay(taskController.taskList, taskController.project);
  storageManager();
}
const taskController = (() => {
  const project = 'Today';
  const taskList = [];
  const taskRemove = (target) => taskController.taskList.splice(target, 1);
  return {
    project, taskList, taskRemove,
  };
})();
function storageManager() {
  localStorage.setItem('saveState', JSON.stringify(taskController.taskList));
}
