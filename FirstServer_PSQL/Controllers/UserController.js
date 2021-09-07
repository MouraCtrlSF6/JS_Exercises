const User = require('../Database/User');

class UserController {
  async index({response}){
    try {
      const { rows } = await User.query(`
        SELECT * 
        FROM users
        ORDER BY id
      `)
      return response.status(200).json({ status: 200, message: rows })
    } catch ({ message }) {
      console.error(message);
      return response.status(500).json({ status: 500, message: message})
    }
  }
  async show({params, response}){
    try {
      const { id } = params
      const { rows: userData } = await User.query(`
        SELECT * 
        FROM users
        WHERE id = ${id}
      `)  
      return response.status(200).json({ status: 200, message: userData[0] })
    } catch ({ message }) {
      console.error(message)
      return response.status(500).json({ status: 500, message: message })
    }
  }
  async store({request, response}) {
    try {
      const { name, email, password, role, description } = request.body;
      await User.query(`
        INSERT INTO users (name, email, password, role, description)
        VALUES ($1, $2, $3, $4, $5);
      `, [name, email, password, role, description])
  
      return response
        .status(201)
        .json({status: 201, message: 'User successfully created'})
  
    } catch ({ message }) {
      console.error(message)
      return response.status(500).json({ status: 500, message: message })
    }
  }
  async update ({params, request, response}) {
    try {
      const { id } = params
      const { name, email, password, role, description } = request.body;
      await User.query(`
        UPDATE 
          users
        SET 
          name = ${name},
          email = ${email},
          password = ${password},
          role = ${role},
          description = ${description}
        WHERE 
          id = ${id}
      `)

      return response.status(200).json({ status: 200, message: 'User successfully updated' })
    } catch ({ message }) {
      console.error(message)
      return response.status(500).json({ status: 500, message: message })
    }
  }
  async delete({params, response}) {
    try {
      const { id } = params
      await User.query(`
        DELETE FROM users 
        WHERE id = ${id}
      `)

      return response.status(204).json({ status: 204, message: 'User deleted' })
    } catch ({ message }) {
      console.error(message)
      return response.status(500).json({ status: 500, message: message })
    }
  }
}

module.exports = UserController