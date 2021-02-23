const dao = require('../dao/user-dao');

function createUser(name, surname, email, password) {
    dao.addUser(name, surname, email, password);
}

function getAllUsers() {
    return dao.getAllUsers();
}

function getUserById(id) {
    return dao.findUserById(id);
}

function updateUserById(id, name, surname, email, password) {
    dao.updateUserById(id, name, surname, email, password);
}

function deleteUserById(id) {
    dao.deleteUserById(id);
}

module.exports = {
    createUser: createUser,
    getAllUsers: getAllUsers,
    getUserById: getUserById,
    deleteUserById: deleteUserById,
    updateUserById:updateUserById
}