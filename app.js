const express = require('express')
// const family = require('./data.js');
const app = express();
const port = process.env.port || 3000;
const queries = require('./queries');

// app.get('/', (request, response) => {
//     response.send(family);
// })
// app.get('/doggy', (request, response) => {
//     response.send('woof woof');
// })

app.listen(port, () => {
    console.log(`listening on ${port}`)
    console.log(queries);
})
app.get('/', (request, res) => {
    res.send('the route worked!!');
    queries.getAll().then(response => res.send(response))
})