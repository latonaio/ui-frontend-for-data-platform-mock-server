
const fs = require('fs');
const path = require('path');
const root = path.resolve('./', 'api');

let apiRes = {}

const allFile = fs.readdirSync(root, { withFileTypes: false })

allFile.forEach((file) => {
    const endpoint = path.basename(file, path.extname(file));
    // apiRes[endpoint] = JSON.parse(fs.readFileSync(root + '/' + file, 'utf-8'));
    // apiRes = JSON.parse(fs.readFileSync(root + '/' + file, 'utf-8'));
    const b = JSON.parse(fs.readFileSync(root + '/' + file, 'utf-8'));
    apiRes = Object.assign(apiRes, b)
})

fs.writeFileSync(root + '/../mock.json', JSON.stringify(apiRes), function (err) {
    if (err) throw err;
});
