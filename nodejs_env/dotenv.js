const fs = require('fs');
const REGEXP = /([a-zA-z0-9$_]*[=]+)/

function config() {
    let fileData = fs.readFileSync('.././.env', 'utf-8');
    let data = fileData.split('\n');
    for (let i = 0; i < data.length; i++) {
        const [key, value] = data[i].split("=");
        if (validate(key))
            continue;
        process.env[key] = value;
    }
}

function validate(key) {
    return key.match(REGEXP);
}

module.exports = {config: config};