const userService = require('../service/user-service');
const {parse} = require('querystring');

function getUsers(req, res) {
    const users = userService.getAllUsers();
    res.statusCode = 200;
    res.end(JSON.stringify({users}));
}

function createUser(req, res) {
    let body = '';
    req.on('data', chunk => {
        body += chunk.toString();
    });
    req.on('end', () => {
        let params = parse(body);
        userService.createUser(params.name, params.surname, params.email, params.password);
        res.statusCode = 201;
        res.end('User successfully created');
    })
}

function updateUser(req, res) {
    let body = '';
    req.on('data', chunk => {
        body += chunk.toString();
    });
    req.on('end', () => {
        let params = parse(body);
        console.log(params.id)
        let id = parseInt(params.id, 10)
        userService.updateUserById(id, params.name, params.surname, params.email, params.password);
        res.statusCode = 200;
        res.end('User successfully updated');
    })
}

function deleteUser(req, res, reqUrl) {
    const id = parseInt(reqUrl.query.id, 10);
    userService.deleteUserById(id);
    res.statusCode = 202;
    res.end('User successfully deleted');
}

function searchUser(req, res, reqUrl) {
    const id = parseInt(reqUrl.query.id, 10);
    const user = userService.getUserById(id);
    res.statusCode = 200;
    res.end(JSON.stringify({user}))
}

function invalidURL(req, res) {
    res.statusCode = 404;
    res.end('Page not found!');
}

module.exports = {
    getUsers: getUsers,
    createUser: createUser,
    invalidURL: invalidURL,
    updateUser: updateUser,
    deleteUser: deleteUser,
    searchUser: searchUser
}