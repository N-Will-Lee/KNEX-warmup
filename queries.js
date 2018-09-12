const dbConnection = require('./knexfile')[process.env.NODE_ENV || 'development'];
const knex = require('knex')(dbConnection);

module.exports = {
    getAll(){
        return knex.select().from('students')
    }
}