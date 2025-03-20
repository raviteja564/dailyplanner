// public/scripts/dashboard.js
const taskForm = document.getElementById('task-form');
const taskList = document.getElementById('task-list');
const logoutBtn = document.getElementById('logout-btn');

// Add Task
taskForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const task = taskForm['task-input'].value;

  db.collection('tasks').add({
    task: task,
    timestamp: firebase.firestore.FieldValue.serverTimestamp(),
  })
  .then(() => {
    taskForm.reset();
  })
  .catch((error) => {
    alert(error.message);
  });
});

// Fetch Tasks
auth.onAuthStateChanged((user) => {
  if (user) {
    db.collection('tasks')
      .orderBy('timestamp')
      .onSnapshot((snapshot) => {
        taskList.innerHTML = '';
        snapshot.forEach((doc) => {
          const task = doc.data().task;
          const li = document.createElement('li');
          li.textContent = task;
          taskList.appendChild(li);
        });
      });
  } else {
    window.location.href = 'index.html';
  }
});

// Logout
logoutBtn.addEventListener('click', () => {
  auth.signOut()
    .then(() => {
      window.location.href = 'index.html';
    });
});
