const express = require('express');
const app = express();

const userService = require('../service/user-service');
const util = require('../util/util.js');

const port = process.env.PORT || 3000;
const BASE_URL = '/api/v1/';

app.use(express.json())


// GET METHODS
app.get('/', (req, res) => {
    res.status(200).send('Welcome to users page');
})

// Get all users
app.get(`${BASE_URL}users`, (req, res) => {
    res.status(200).send(util.convertToJson(userService.getAllUsers()));
});

// Get user by ID
app.get(`${BASE_URL}users/:id`, (req, res) => {
    const user = userService.getUserById(Number(req.params.id));
    if (user) {
        res.status(200).send(util.convertToJson(user));
    } else {
        res.status(400).send('User not found');
    }
});

// POST METHOD
// create user
app.post(`${BASE_URL}users`, (req, res) => {
    let name = req.body.name;
    let surname = req.body.surname;
    let email = req.body.email;
    let password = req.body.password;
    userService.createUser(name, surname, email, password);
    res.status(200).send('User successfully added');
});


// PUT METHOD
// update user
app.put(`${BASE_URL}users/:id`, (req, res) => {
    let id = Number(req.params.id);
    if (userService.getUserById(id)) {
        userService.updateUserById(id, req.body);
        res.status(200).send('User successfully updated');
    } else {
        res.status(502).send('Fail to update user');
    }
});

// DELETE METHOD
// delete user by id
app.delete(`${BASE_URL}users/:id`, (req, res) => {
    userService.deleteUserById(Number(req.params.id))
    res.status(200).send('User successfully removed');
});

//invalid url
app.get('*', (req, res) => {
    res.status(404).send('Page not found');
})
app.listen(port, () => {
    console.log(`Server app listening at http://localhost:${port}`)
});