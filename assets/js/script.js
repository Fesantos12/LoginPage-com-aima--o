const Login = document.querySelector('.login-container h2')
const LoginContainer = document.querySelector('.login-container');
const signUp = document.querySelector('.signup-container h1');


Login.addEventListener('click', () => {
    LoginContainer.classList.add('active');
});

signUp.addEventListener('click', () => {
    LoginContainer.classList.remove('active');
});
