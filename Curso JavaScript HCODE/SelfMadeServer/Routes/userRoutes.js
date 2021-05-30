const userController = require('../Controllers/userController.js');

module.exports = app => {
    const Route = app.route('/users');
    const SearchRoute = app.route('/users/:id');

    Route.get((request, response) => {
        new userController(request, response).getAllUsers();
    }); 
    Route.post((request, response) => {
        new userController(request, response).storeUser();
    });
    SearchRoute.put((request, response) => {
        new userController(request, response).updateUser();
    });
    SearchRoute.delete((request, response) => {
        new userController(request, response).removeUser();
    });
}