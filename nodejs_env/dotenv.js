const fs = require('fs');
const REGEXP = /([a-zA-z0-9$_]*[=]+)/

function config() {
    let fileData = fs.readFileSync('.././.env', 'utf-8');
    let data = fileData.split('\n');
    for (let i = 0; i < data.length; i++) {
        const [key, value] = data[i].split("=");
        if (validate(key)) continue;
        if (value === undefined) continue;
        process.env[key] = parse(value);
    }
}

function validate(key) {
    return key.match(REGEXP);
}

function parse(value) {
    return value.replace(/['"]/g, '');
}

module.exports = {config: config};