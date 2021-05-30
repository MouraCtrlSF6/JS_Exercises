const NeDB = require('nedb');

module.exports = new NeDB ({
    filename: 'Tables/Users.db', 
    autoload: true 
})
