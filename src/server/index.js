const express = require('express');
var bodyParser = require('body-parser');
const faker = require('faker')

const app = express()
app.use( bodyParser.json() );       

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
  res.header('Access-Control-Allow-Methods', 'GET,OPTIONS');
  next();
});


let users = [];

app.get('/GetUsers',  function (req, res) {  

    let index = 0;
    let createdUsers = [];

    do {

        var user = {
            id : faker.random.number(),
            firstName : faker.name.firstName(),
            lastName : faker.name.lastName(),
            email : faker.internet.email(),
            avatar: faker.internet.avatar()
        }

        createdUsers.push(user);
        index++;
    }
    while (index < 10)

    res.send([...createdUsers, ...users]);
});


app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
});