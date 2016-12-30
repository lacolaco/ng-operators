const pkg = require('./package.json');
const fs = require('fs');

delete pkg.scripts;

const distPkg = Object.assign({}, pkg, {
    name: 'ng-operators',
    main: 'index.js',
});

fs.writeFileSync('dist/package.json', JSON.stringify(distPkg, null, 2));
fs.writeFileSync('dist/README.md', fs.readFileSync('./README.md').toString());
