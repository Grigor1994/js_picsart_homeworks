const http = require('http');
const url = require('url');
const baseUrl = '/api/v1/users';

module.exports = http.createServer((req, res) => {
    const controller = require('../controller/controller.js');
    const reqUrl = url.parse(req.url, true);

    if (req.method === 'GET') {
        switch (reqUrl.pathname) {
            case baseUrl:
                controller.getUsers(req, res);
                break;
            case '/api/v1/users/search/':
                controller.searchUser(req, res, reqUrl);
                break;
            default:
                controller.invalidURL(req, res);
        }
    } else if (req.method === 'POST') {
        switch (reqUrl.pathname) {
            case '/api/v1/users/add':
                controller.createUser(req, res);
                break;
            default:
                controller.invalidURL(req, res)
        }
    } else if (reqUrl.pathname === baseUrl + '/delete/' && req.method === 'DELETE') {
        controller.deleteUser(req, res, reqUrl);
    } else if (reqUrl.pathname === baseUrl + '/update') {
        controller.updateUser(req, res);
    } else {
        controller.invalidURL(req, res);
    }
})