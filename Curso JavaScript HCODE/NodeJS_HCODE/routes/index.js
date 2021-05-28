const HomePageView = require('../views/HomePageView.js');

module.exports = Route => {
    Route.get('/', (request, response) => {
        response.statusCode = 200;
        response.setHeader('Content-Type', 'text/html');
        response.end(HomePageView); 
    });
};