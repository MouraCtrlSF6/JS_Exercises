const kleinMainView = require('../Views/KleinViews/kleinView.js');
const mainView = require('../Views/MainViews/mainView.js');

module.exports = Route => {
    Route.get('/klein', (request, response) => {
        return response
            .end(kleinMainView);
    });
    Route.get('/mainpage', (request, response) => {
        return response
            .end(mainView);
    });
}