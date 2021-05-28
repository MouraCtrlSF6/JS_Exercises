module.exports = {
    send: (error, request, response, statusCode = 400) => {
        response    
            .status(statusCode)   
            .json({ status: statusCode, message: error });
    }
}