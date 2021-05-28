const userName = document.querySelector('[name=userName]');
const userPassword = document.querySelector('[name=userPassword]');
const formRegister = document.querySelector('form');

formRegister.addEventListener('submit', event => {
    event.preventDefault();
    const newUser = new User(userName.value, userPassword.value);
    
    newUser.storeUser();
    window.location.href = './views/index.html';
});
