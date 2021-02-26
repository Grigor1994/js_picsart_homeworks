const fs = require('fs');
const UNICODE = 'utf-8';

function write(path, data) {
    fs.writeFileSync(path, data, UNICODE);
}

function read(path) {
    return JSON.parse(fs.readFileSync(path, UNICODE));
}

function convertToJson(data) {
    return JSON.stringify(data);
}

function isFileExists(path) {
    return fs.existsSync(path);
}

module.exports = {
    write: write,
    read: read,
    convertToJson: convertToJson,
    isFileExists:isFileExists
}