const Login = document.querySelector('.login-container h2')
const LoginContainer = document.querySelector('.login-container');
const signUp = document.querySelector('.signup-container h1');


Login.addEventListener('click', () => {
    LoginContainer.classList.add('active');
});

signUp.addEventListener('click', () => {
    LoginContainer.classList.remove('active');
});

function getSignUpvalues () {
    const signupName = document.getElementById('Name');
    const signupMail = document.getElementById('Email');
    const signupPassword = document.getElementById('Senha')
    const signUpForm = document.getElementById('Form');

    signUpForm.addEventListener('submit', e => {
        e.preventDefault();
        console.log({
            name: signupName.value,
            mail: signupMail.value,
            password: signupPassword.value,
        });

    })
}

getSignUpvalues();

function getLoginValues() {
    const LoginEmail = document.getElementById('EmailLogin');
    const LoginPassword = document.getElementById('PasswordLogin');
    const LoginForm = document.getElementById('FormLogin');

    LoginForm.addEventListener('submit', e => {
        e.preventDefault();
        console.log({
            loginemail: LoginEmail.value,
            loginpassword: LoginPassword.value,
        });
    })
}

getLoginValues();