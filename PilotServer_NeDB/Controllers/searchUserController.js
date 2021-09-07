const Users = require('../Models/Users.js');

module.exports = class SearchUserController {
    constructor(request, response){
        this.request = request;
        this.response = response;
    }

    async getUser(){
        let where = Object();
        for(const [key, value] of Object.entries(this.request.body)){
            where[key] = value;
        }

        await Users.find(where).exec((error, users) => {
            if(error)
                return this.response
                    .status(400)
                    .json({ status: 400, message: error.message });

            return this.response
                .status(200)
                .json({ status: 200, message: users});
        })
    }
}