const taskInput = document.getElementById('taskInput');
const taskList = document.getElementById('taskList');
const modeBtn = document.querySelector('.mode-toggle');

let darkMode = false;
function addTask() {
  const taskText = taskInput.value.trim();
  if (taskText === '') return;
  const li = document.createElement('li');
  li.innerHTML = `
    <span onclick="toggleTask(this)">${taskText}</span>
    <button onclick="deleteTask(this)">✕</button>
  `;
  taskList.appendChild(li);
  taskInput.value = '';
}

function toggleTask(span) {
  span.parentElement.classList.toggle('done');
}

function deleteTask(button) {
  const li = button.parentElement;
  li.style.animation = 'fadeOut 0.3s forwards';
  setTimeout(() => li.remove(), 300);
}

function toggleMode() {
  document.body.classList.toggle('dark');
  darkMode = !darkMode;
  modeBtn.textContent = darkMode ? '🌙' : '🌞';
}