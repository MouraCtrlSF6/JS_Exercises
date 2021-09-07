const UserController = require('../Controllers/UserController')

module.exports = (app) => {
  const Routes = {
    userNoParams: app.route('/user'),
    userWithParams: app.route('/user/:id')
  }
 
  Routes.userNoParams.get((request, response) => {
    const PAYLOAD = {
      request,
      response,
      params: request.params
    }
    new UserController().index(PAYLOAD)
  })
  Routes.userWithParams.get((request, response) => {
    const PAYLOAD = {
      request,
      response,
      params: request.params
    }
    new UserController().show(PAYLOAD)
  })
  Routes.userNoParams.post((request, response) => {
    const PAYLOAD = {
      request,
      response,
      params: request.params
    }
    new UserController().store(PAYLOAD)
  })
  Routes.userWithParams.patch((request, response) => {
    const PAYLOAD = {
      request,
      response,
      params: request.params
    }
    new UserController().update(PAYLOAD)
  })
  Routes.userWithParams.delete((request, response) => {
    const PAYLOAD = {
      request,
      response,
      params: request.params
    }
    new UserController().delete(PAYLOAD)
  })
}