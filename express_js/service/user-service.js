const dao = require('../dao/user-dao');

function createUser(name, surname, email, password) {
    dao.addUser(name, surname, email, password);
}

function getAllUsers() {
    return dao.getAllUsers();
}

function getUserById(id) {
    return dao.getUserById(id);
}

function updateUserById(id, data) {
    dao.updateUserById(id, data);
}

function deleteUserById(id) {
    dao.deleteUserById(id);
}

module.exports = {
    createUser: createUser,
    getAllUsers: getAllUsers,
    getUserById: getUserById,
    deleteUserById: deleteUserById,
    updateUserById: updateUserById
}