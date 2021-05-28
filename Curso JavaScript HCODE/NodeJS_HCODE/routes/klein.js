const prefix = '/klein';

module.exports = Route => {
    Route.get(prefix, (request, response) => {
        response.statusCode = 200;
        response.setHeader('Content-Type', 'text/html');
        response.end('<h1>O Klein eh corno</h1>');
    });    
};