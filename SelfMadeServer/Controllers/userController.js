const Users = require('../Models/Users.js');

module.exports = class UserController {
    constructor(request, response) {
        this.request = request;
        this.response = response;
    }

    async save(method, content){
        switch (method){
            case 'put':
                await Users.update({ _id: this.request.params.id }, content, error => {
                    if(error) 
                        return this.response
                            .status(400)
                            .json({ status: 400, message: error.message });
                });
                break;

            case 'post':
                await Users.insert(content, error => {
                    if(error)
                        return this.response
                            .status(400)
                            .json({ status: 400, message: error.message });
                });
                break;
        }
    }

    async getAllUsers(){
        await Users.find().sort({name:1}).exec((error, users) => {
            if(error){
                return this.response
                    .status(500)
                    .json({ status: 500, message: error.message });
            }

            if(!users.length)
                return this.response
                    .status(404)
                    .json({ status: 404, message: 'No users found' });
            
            return this.response
                .status(200)
                .json({ status: 200, message: users});
        })
    }

    async storeUser(){
        await Users.findOne({ email: this.request.body.email }).exec((error, user) => {
            if(error)
                return this.response
                    .status(400)
                    .json({ status: 400, message: error.message });
            if(user)
                return this.response
                    .status(400)
                    .json({ status: 400, message: 'Email already in use'});
            
        });
        
        const newUser = {
            name: this.request.body.name, 
            email: this.request.body.email,
            password: this.request.body.password,
            birth: this.request.body.birth,
            gender: this.request.body.gender,
            photo: this.request.body.photo,
            admin: this.request.body.admin,
        };
        
        for (const [key, value] of Object.entries(newUser)){
            if(value === undefined && key !== 'photo' && key !== 'gender')
                return this.response
                    .status(400)
                    .json({ status: 400, message: `Required field '${key}' not provided` });
        }

        await this.save('post', newUser);
        return this.response
            .status(200)
            .json({ status: 200, message: 'User inserted successfully' });
    }

    async updateUser(){
        let newUser, oldUser;
        await Users.findOne({ _id: this.request.params.id }).exec(async (error, user) => {
            if(error)
                return this.response
                    .status(400)
                    .json({ status: 400, message: error.message });

            oldUser = user;
            newUser = { 
                name: this.request.body.name, 
                email: this.request.body.email,
                password: this.request.body.password,
                birth: this.request.body.birth,
                gender: this.request.body.gender,
                photo: this.request.body.photo,
                admin: this.request.body.admin,
            }

            for(const [key, value] of Object.entries(newUser)){
                if(value !== undefined){
                    oldUser[key] = value;
                }
            }
            await this.save('put', oldUser);
            return this.response
                .status(200)
                .json({ status: 200, message: 'User updated successfully'});
        });
    }

    async removeUser(){
        await Users.remove({ _id: this.request.params.id }, {}, error => {
            if(error) 
                return this.response
                    .status(400)
                    .json({ status: 400, message: error.message});
            
            return this.response
                .status(200)
                .json({ status: 200, message: 'User deleted successfully'});
        })
    }
}