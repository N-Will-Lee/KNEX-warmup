const dbConnection = require('./knexfile')[process.env.NODE_ENV || 'development'];
const knex = require('knex')(dbConnection);

function allStudents()  {
    return knex.select().from('students')
}
function individualStudent(id)    {
    return knex.select().from('students').where('firstName', id)
}
function createStudent(newStudent)   {
    return knex('students').insert(newStudent).returning('*')
}





function deleter(id) {
    return knex('students').where('id', id).delete()
}
module.exports = {
    allStudents,
    individualStudent,
    createStudent,
    deleter
}