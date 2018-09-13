const express = require('express')
const app = express();
const port = process.env.PORT || 3000;
const queries = require('./queries');
const bodyParser = require('body-parser')

app.use(bodyParser.json())

app.get('/', (request, response) => {
  queries.allStudents().then(function(students) {
    response.json({students})
  })
})

app.get('/:id', (request, response) =>    {
    // console.log(request.params)
    queries.individualStudent(request.params.id).then(function(student) {
        response.json({student})
    })
})

app.post('/', (request, response) => {
    queries.createStudent(request.body)
    .then((data) => {
        response.json({data})
    })
    console.log(request.body)
})

app.delete('/id', (request, response) => {
    queries.deleter(request.params.id)
})

app.listen(port, () => {
    console.log(`listening on ${port}`)
})