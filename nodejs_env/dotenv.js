const fs = require('fs');

function config() {
    let fileData = fs.readFileSync('.././.env', 'utf-8');
    let data = fileData.split('\n');
    let uniqueData = new Set(data);
    const newArray = [...uniqueData];
    for (let i = 0; i < newArray.length; i++) {
        const [key, value] = newArray[i].split("=");
        if(key.startsWith('=')|| key.startsWith('#'))
            continue;
        process.env[key] = value;
    }
}

module.exports = {config: config};