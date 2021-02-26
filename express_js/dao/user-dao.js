const util = require('../util/util')
const user = require('../model/user');
const DATABASE_PATH = './users.json';


function addUser(name, surname, email, password) {
    let id = user.userData.users.length;
    if (util.isFileExists(DATABASE_PATH)) {
        const cachedData = util.read(DATABASE_PATH);
        id = cachedData.length;
        cachedData.push({id: id, name: name, surname: surname, email: email, password: password});
        util.write(DATABASE_PATH, util.convertToJson(cachedData));
    } else {
        user.userData.users.push({id: id, name: name, surname: surname, email: email, password: password});
        util.write('users.json', util.convertToJson(user.userData))
    }
}

function findUserById(id) {
    const data = util.read(DATABASE_PATH);
    const index = getIndexById(data, id);
    if (typeof data[index] === 'undefined') return false;

    return data[index];
}

function getAllUsers() {
    return util.read(DATABASE_PATH);
}

function updateUserById(id,data){
    const arr = util.read(DATABASE_PATH);
    for (let arrElement of arr) {
        if (arrElement.id === id) {
            for (let i in data) {
                arrElement[i] = data[i];
            }
            break;
        }
    }
    util.write('users.json',util.convertToJson(arr))
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