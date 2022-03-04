const UserController = require('../Controllers/UserController.js');
const SearchUserController = require('../Controllers/SearchUserController.js');

module.exports = app => {
    const Route = app.route('/users');
    const SearchRoute = app.route('/users/:id');
    const QueryRoute = app.route('/users/query-route')

    Route.get((request, response) => UserController(request, response).getAllUsers())

    Route.post((request, response) => UserController(request, response).storeUser())

    SearchRoute.put((request, response) => UserController(request, response).updateUser())
    
    SearchRoute.delete((request, response) => UserController(request, response).removeUser())
    
    QueryRoute.get((request, response) => SearchUserController(request, response).getUser())
}