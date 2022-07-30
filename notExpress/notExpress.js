module.exports = function (request, response) {
  const methods = {
    get: (route, callback) => {
      if(validate(request, route, "GET")) {
        exec(callback, request, response);
        return;
      }
    },
    post: (route, callback) => {
      if(validate(request, route, "POST")) {
        exec(callback, request, response);
        return;
      }
    },
    put: (route, callback) => {
      if(validate(request, route, "PUT")) {
        exec(callback, request, response);
        return;
      }
    },
    delete: (route, callback) => {
      if(validate(request, route, "DELETE")) {
        exec(callback, request, response);
        return;
      }
    },
  };

  function validate({ url, method }, route, routeMethod) {
    return url == route && method == routeMethod;
  }
  
  function exec(callback, request, response) {
    const payload = callback(request, response);
  
    response.write(
      typeof(payload) == "string"
        ? payload
        : JSON.stringify(payload)
    );
  
    response.end();
  }

  return methods;
}



