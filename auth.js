// public/scripts/auth.js
const loginForm = document.getElementById('login-form');
const signupForm = document.getElementById('signup-form');

if (loginForm) {
  loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = loginForm['email'].value;
    const password = loginForm['password'].value;

    auth.signInWithEmailAndPassword(email, password)
      .then(() => {
        window.location.href = 'dashboard.html';
      })
      .catch((error) => {
        alert(error.message);
      });
  });
}

if (signupForm) {
  signupForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = signupForm['email'].value;
    const password = signupForm['password'].value;

    auth.createUserWithEmailAndPassword(email, password)
      .then(() => {
        window.location.href = 'dashboard.html';
      })
      .catch((error) => {
        alert(error.message);
      });
  });
}
