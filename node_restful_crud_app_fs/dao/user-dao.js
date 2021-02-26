const util = require('../util/util')
const user = require('../model/user');
const DATABASE_PATH = '../users.json';
const cache = util.read(DATABASE_PATH);

function addUser(name, surname, email, password) {
    let id = user.userData.userArray.length;
    if (util.isFileExists(DATABASE_PATH)) {
        const cachedData = util.read(DATABASE_PATH);
        id = cachedData.length;
        cachedData.push({id: id, name: name, surname: surname, email: email, password: password});
        util.write(DATABASE_PATH, util.convertToJson(cachedData));
    } else {
        user.userData.push({id: id, name: name, surname: surname, email: email, password: password});
        util.write('users.json', util.convertToJson(user.userData))
    }
}

function findUserById(id) {
    const data = util.read(DATABASE_PATH);
    const index = getIndexById(data, id);
    if (typeof data[index] === 'undefined') {
        return `User with this ${index} ID does not exist.`;
    } else {
    }
    return data[index];
}

function getAllUsers() {
    return util.read(DATABASE_PATH);
}

function updateUserById(id, name = cache[id].name, surname = cache[id].surname, email = cache[id].email, password = cache[id].password) {
    for (let i in cache) {
        if (cache[i].id === id) {
            cache[i].name = name;
            cache[i].surname = surname;
            cache[i].email = email;
            cache[i].password = password;
            break;
        }
    }
    util.write(DATABASE_PATH,util.convertToJson(cache))
}
function deleteUserById(id) {
    const cachedData = util.read(DATABASE_PATH);
    cachedData.splice(getIndexById(cachedData, id), 1);
    const convertedData = util.convertToJson(cachedData);
    util.write(DATABASE_PATH, convertedData);
}

function getIndexById(array, id) {
    let index = -1;
    for (let key of array) {
        if (key.id === id) {
            return index = array.indexOf(key);
        }
    }
    return -1;
}

module.exports = {
    addUser: addUser,
    findUserById: findUserById,
    getAllUsers: getAllUsers,
    deleteUserById: deleteUserById,
    updateUserById: updateUserById,
}