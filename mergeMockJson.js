const fs = require('fs');
const path = require('path');
const root = path.resolve('./', 'api');

let apiRes = {}

const allFiles = fs.readdirSync(root, { withFileTypes: false })

allFiles.forEach((file) => {
    console.log(`try ${file}`);

    const endpoint = path.basename(file, path.extname(file));
    // apiRes[endpoint] = JSON.parse(fs.readFileSync(root + '/' + file, 'utf-8'));
    // apiRes = JSON.parse(fs.readFileSync(root + '/' + file, 'utf-8'));
    const b = JSON.parse(fs.readFileSync(root + '/' + file, 'utf-8'));
    apiRes = Object.assign(apiRes, b);

    console.log(`complete ${file}`);
})

fs.writeFileSync(root + '/../mock.json', JSON.stringify(apiRes), (err) => {
    if (err) throw err;
});
