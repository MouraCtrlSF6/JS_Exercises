const Users = require('../Models/Users.js');

module.exports = class UserController {
    async getAllUsers(request, response){
        await Users.find().sort({name:1}).exec((error, users) => {
            if(error){
                console.error(error);
                return response
                    .status(500)
                    .json({ status: 500, message: error });
            }

            if(!users.length)
                return response
                    .status(404)
                    .json({ status: 404, message: 'No users found' });
            
            return response
                .status(200)
                .json({ status: 200, message: users});
        })
    }

    async storeUser(request, response){
        await Users.findOne({ email: request.body.email }).exec((error, user) => {
            if(error)
                return response
                    .status(400)
                    .json({ status: 400, message: error });
            if(user)
                return response
                    .status(400)
                    .json({ status: 400, message: 'Email already in use'});
            
        });

        const newUser = {
            name: request.body.name, 
            email: request.body.email,
            password: request.body.password,
            birth: request.body.birth,
            gender: request.body.gender,
            photo: request.body.photo,
            admin: request.body.admin,
        };

        for (const [key, value] of Object.entries(newUser)){
            if(!value && key !== 'photo' && key !== 'gender')
                return response
                    .status(400)
                    .json({ status: 400, message: `Required field '${key}' not provided` });
        }

        await Users.insert(newUser, error => {
            if(error)
                return response
                    .status(400)
                    .json({ status: 400, message: error.message });
            
            return response
                .status(200)
                .json({ status: 200, message: 'User inserted successfully' });
        });
    }
}