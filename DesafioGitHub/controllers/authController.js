class User {
    constructor(userName, userPassword){
        this._name = userName;
        this._password = userPassword;
    }
    
    storeUser(){
        let registeredUsers = [];
        if(this.currentUsers){
            registeredUsers = this.currentUsers;
        }
        const newUsers = {
            name: this._name,
            password: this._password
        }
        registeredUsers.push(newUsers);
        localStorage.setItem('userList', JSON.stringify(registeredUsers))
    }
    authenticate(){
        let found = false;
        for (const currentUser of [...this.currentUsers]) {
            if(currentUser.name === this._name){
                found = true
                if(currentUser.password === this._password){
                    return true;
                }
                console.error('Senhas não batem!');
                return false;
            }
        };
        console.error('Usuário não cadastrado!');
        return false;
    }
    get currentUsers(){
        const users = JSON.parse(localStorage.getItem('userList'));
        return users;
    }
}
