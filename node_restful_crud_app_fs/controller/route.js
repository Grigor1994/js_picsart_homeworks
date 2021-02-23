const http = require('http');
const url = require('url');

module.exports = http.createServer((req, res) => {
    const controller = require('../controller/controller.js');
    const reqUrl = url.parse(req.url, true);

    if (req.method === 'GET') {
        switch (reqUrl.pathname) {
            case '/users':
                controller.getUsers(req, res);
                break;
            case '/delete-user/':
                controller.deleteUser(req, res, reqUrl);
                break;
            case '/search-user/':
                controller.searchUser(req, res, reqUrl);
                break;
            default:
                controller.invalidURL(req, res);
        }
    } else if (req.method === 'POST') {
        switch (reqUrl.pathname) {
            case '/create-user':
                controller.createUser(req, res);
                break;
            case '/update-user':
                controller.updateUser(req, res);
                break;
            default:
                controller.invalidURL(req, res)
        }
    }
})