const Login = document.querySelector('.login-container h2');
const LoginContainer = document.querySelector('.login-container');
const signUp = document.querySelector('.signup-container h1');
const signUpContainer = document.querySelector('.signup-container');

const signUpInputName = document.querySelector('#Name');
const signUpLabelName = document.querySelector('.labelName');
const signUpInputEmail = document.querySelector('#Email');
const signUpLabelEmail = document.querySelector('.labelEmail');
const signUpInputSenha = document.querySelector('#Senha');
const signUpLabelSenha = document.querySelector('.labelPassword');

const loginInputEmail = document.querySelector('#EmailLogin');
const loginLabelEmail = document.querySelector('.emailLoginLabel');
const loginInputPassword = document.querySelector('#PasswordLogin');
const loginLabelPassword = document.querySelector('.passwordLoginLabel');

signUpContainer.addEventListener('click', () => {
  if (!signUpInputName.value) {
    signUpInputName.style.border = '2px solid red';
    signUpLabelName.style.color = 'red';
  } else {
    signUpInputName.style.border = 'none';
    signUpLabelName.style.color = '#ebebeb';
  }

  if (!signUpInputEmail.value) {
    signUpInputEmail.style.border = '2px solid red';
    signUpLabelEmail.style.color = 'red';
  } else {
    signUpInputEmail.style.border = 'none';
    signUpLabelEmail.style.color = '#ebebeb';
  }

  if (!signUpInputSenha.value) {
    signUpInputSenha.style.border = '2px solid red';
    signUpLabelSenha.style.color = 'red';
  } else {
    signUpInputSenha.style.border = 'none';
    signUpLabelSenha.style.color = '#ebebeb';
  }
});

LoginContainer.addEventListener('click', () => {
  if (!loginInputEmail.value) {
    loginInputEmail.style.border = '2px solid red';
    loginLabelEmail.style.color = 'red';
  } else {
    loginInputEmail.style.border = 'none';
    loginLabelEmail.style.color = '#022b3a';
  }

  if (!loginInputPassword.value) {
    loginInputPassword.style.border = '2px solid red';
    loginLabelPassword.style.color = 'red';
  } else {
    loginInputPassword.style.border = 'none';
    loginLabelPassword.style.color = '#022b3a';
  }
});

Login.addEventListener('click', () => {
  LoginContainer.classList.toggle('active');
});

signUp.addEventListener('click', () => {
  LoginContainer.classList.remove('active');
});

function getSignUpvalues() {
  const signupName = document.getElementById('Name');
  const signupMail = document.getElementById('Email');
  const signupPassword = document.getElementById('Senha');
  const signUpForm = document.getElementById('Form');

  signUpForm.addEventListener('submit', (e) => {
    e.preventDefault();

    if (
      !signUpInputName.value ||
      !signUpInputEmail.value ||
      !signUpInputSenha.value
    ) {
      alert('Preencha todos os campos!');
    } else {
      console.log({
        name: signupName.value,
        mail: signupMail.value,
        password: signupPassword.value,
      });

      signUpInputName.value = '';
      signUpInputEmail.value = '';
      signUpInputSenha.value = '';
    }
  });
}

getSignUpvalues();

function getLoginValues() {
  const LoginEmail = document.getElementById('EmailLogin');
  const LoginPassword = document.getElementById('PasswordLogin');
  const LoginForm = document.getElementById('FormLogin');

  LoginForm.addEventListener('submit', (e) => {
    e.preventDefault();

    if (!loginInputEmail.value || !loginInputPassword.value) {
      alert('Preencha todos os campos!');
    } else {
      console.log({
        loginemail: LoginEmail.value,
        loginpassword: LoginPassword.value,
      });

      loginInputEmail.value = '';
      loginInputPassword.value = '';
    }
  });
}

getLoginValues();
