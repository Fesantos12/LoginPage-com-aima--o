const Login = document.querySelector('.login-container h2')
const Container = document.querySelector('container');
const signIn = document.getElementById('signup');

Login.addEventListener('click', () => {
    // LoginContainer.classList.add('active');
    Container.classList.add('.active');
    console.log('ativou');
});
