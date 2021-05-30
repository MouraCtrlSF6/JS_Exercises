const prefix = '/users'
const NeDB = require('nedb');

let myDatabase = new NeDB({
    filename: 'databases/users.db',
    autoload: true
});

module.exports = Route => {
    //Ordinary user path
    Route.get(`${prefix}`, (request, response) => {
        myDatabase.find().sort({name:1}).exec((error, users) => {
            if(error){
                console.log(error);
            }
            else if(!users.length) {
                response    
                    .status(404)
                    .json({status: 404, message: 'No users found!'});
            }
            else {
                response
                    .status(200)
                    .json({status: 200, message: users});
            }
        });
    }); 
    Route.get(`${prefix}/search-user-id/:id`, (request, response) => {
        myDatabase.findOne({ _id: request.params.id }).exec((error, user) => {
            if(error){
                console.log(error);
            }
            else if(!user){
                response 
                    .status(404)
                    .json({ status: 404, message: 'User not found!' })
            }
            else{
                response 
                    .status(200)
                    .json({ status: 200, message: user })
            }
        });
    });
    Route.get(`${prefix}/search-user-name/:name`, (request, response) => {
        myDatabase.find({ name: request.params.name }).exec((error, user) => {
            if(error){
                console.log(error);
            }
            else if(!user.length){
                response 
                    .status(404)
                    .json({ status: 404, message: 'User not found!' })
            }
            else{
                response 
                    .status(200)
                    .json({ status: 200, message: user })
            }
        });
    });
    Route.post(`${prefix}`,(request, response) => {
        myDatabase.insert(request.body, (error, user) => {
            if(error){
                console.log(`ErrorLog: ${error}`);
                response
                    .status(400)
                    .json({status: 400, message: error});
            }
            else {
                response
                    .status(200)
                    .json(user);
            }
        });
    });
    Route.put(`${prefix}/:id`, async (request, response) => {
        let userFound;

        await myDatabase.findOne({ _id: request.params.id }).exec((error, user) => {
            if(error){
                console.log(error);
                return false;
            }
            if(!user){
                return false;
            }
            userFound = user;
        });
        await myDatabase.update({ _id: request.params.id }, request.body, error => {
            if(!userFound){
                return response
                .status(404)
                .json({ status: 404, message: 'User not found!' });
            }
            if(error){
                return error;
            }
            const newUserData = {
                name: request.body.name,
                password: request.body.password,
                email: request.body.email
            }

            if(!newUserData.name || !newUserData.password || !newUserData.email){
                return response 
                .status(400)
                .json({ status: 400, message: 'Required data not provided!'});  
            }
            return response 
                    .status(200)
                    .json({ status: 200, message: Object.assign(
                        request.params,
                        request.body
            )});
        });
    });
    Route.delete(`${prefix}`,(request, response) => {
        myDatabase.remove({ _id: request.params.id }, {}, (error) => {
            if(error){
                console.log(error);
            }
            else {
                response
                    .status(200)
                    .json({ status: 200, message: 'Users removed successfully' });
            }
        })
    });

    // Admin path
    Route.get(`${prefix}/admin`, (request, response) => {
        response.statusCode = 200;
        response.setHeader('Content-Type', 'application/json');
        response.end(JSON.stringify({
            admin: {
                name: 'Luquinhas_Oadmin',
                email: 'lucassiyahoo.com.br@gmail.com',
                id: 1,
                password: '@Senha123',
            }
        }));
    });
};
