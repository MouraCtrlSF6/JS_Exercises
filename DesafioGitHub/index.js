const mainUser = new User('Lucas', '@Senha123');
if (!mainUser.currentUsers){
    mainUser.storeUser();
}

const userName = document.querySelector('[name=userName]');
const userPassword = document.querySelector('[name=userPassword]');
const formRegister = document.querySelector('form');

formRegister.addEventListener('submit', event => {
    event.preventDefault();
    
    const userLogging = new User(userName.value, userPassword.value);
    if(userLogging.authenticate()){
        window.location.href = 'userPage.html';
    }
});