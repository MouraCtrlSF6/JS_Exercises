function notExpress(request, response) {
  const methods = {
    GET: "get",
    POST: "post", 
    PUT: "put", 
    DELETE: "delete"
  };

  const specifics = {
    method: null,
    route: null
  };

  const validations = [
    {
      name: "Wrong method",
      exec: () => {
        return request.method.toLowerCase() == specifics.method;
      }
    },
    { 
      name: "Wrong route",
      exec: () => {
        return request.url == specifics.route;
      }
    }
  ]

  function validate(route, method) {
    [specifics.route, specifics.method] = [route, method];
    const errors = validations.filter(validation => !validation.exec());
    return !errors.length;
  }

  function implementation(route, method, callback) {
    if(!validate(route, method)) {
      response.end();
      return;
    }
    const payload = callback(request, response);
    const format = typeof(payload) == "string"
      ? payload
      : JSON.stringify(payload)
    
    response.write(format);
    response.end();
    return;
  }

  function get(route, callback) {
    implementation(route, methods.GET, callback);
    return;
  }

  function post(route, callback) {
    implementation(route, methods.POST, callback);
    return;
  }

  function put(route, callback) {
    implementation(route, methods.PUT, callback);
    return;
  }

  function remove(route, callback) {
    implementation(route, methods.DELETE, callback);
    return;
  }

  const callables = {
    get,
    post, 
    put,
    remove
  };

  return callables;
}

module.exports = notExpress;


