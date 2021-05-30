const userController = require('../Controllers/userController.js');
const searchUserController = require('../Controllers/searchUserController.js');

module.exports = app => {
    const Route = app.route('/users');
    const SearchRoute = app.route('/users/:id');
    const QueryRoute = app.route('/users/query-route')

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
    QueryRoute.get((request, response) => {
        new searchUserController(request, response).getUser();
    });
}