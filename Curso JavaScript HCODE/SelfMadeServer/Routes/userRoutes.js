const userController = require('../Controllers/userController.js');

module.exports = app => {
    const Route = app.route('/users');

    Route.get((request, response) => {
        const method = new userController().getAllUsers(request, response);
        return method;
    }); 
    Route.post((request, response) => {
        const method = new userController().storeUser(request, response);
        return method;
    });
    Route.put((request, response) => {
        const method = new userController().updateUser(request, response);
        return method;
    })
    Route.delete((request, response) => {
        const method = new userController().removeUser(request, response);
        return method;
    })
}