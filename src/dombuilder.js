import { pageSelect, removeTask } from './index.js';
export function removeAllChildNodes(parent) {
  while (parent.firstChild) {
    parent.removeChild(parent.firstChild);
  }
}
export function domDisplay(taskList, currentProject) {
  const taskArea = document.getElementById('taskArea');
  const list = [];
  removeAllChildNodes(taskArea);
  for (let i = 0; i < taskList.length; i++) {
    if (taskList[i].project == currentProject) {
      list.push(taskList[i]);
    }
  }
  function generateElements(task) {
    const wrap = document.createElement('div');
    const label = document.createElement('label');
    const htmlInput = document.createElement('input');
    const span = document.createElement('span');
    wrap.classList.add('form-control', 'checklist');
    label.classList.add('cursor-pointer', 'taskLabel');
    htmlInput.classList.add('checkbox', 'checkbox-primary');
    htmlInput.setAttribute('type', 'checkbox');
    htmlInput.setAttribute('data-label', task);
    htmlInput.addEventListener('click', removeTask);
    span.classList.add('label-text');
    span.setAttribute('id', task);
    label.appendChild(htmlInput);
    label.appendChild(span);
    wrap.appendChild(label);
    span.innerHTML = task;
    taskArea.appendChild(wrap);
  }
  list.forEach((element) => generateElements(element.taskName));
}
export function projManager(projName) {
  const projQ = document.getElementById('projQ');
  const listItem = document.createElement('li');
  const anchor = document.createElement('a');
  anchor.classList.add('navBtn');
  anchor.setAttribute('id', projName);
  anchor.innerHTML = projName;
  anchor.addEventListener('click', pageSelect);
  listItem.appendChild(anchor);
  projQ.appendChild(listItem);
  anchor.click();
}
