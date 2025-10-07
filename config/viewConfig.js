const path = require('path');

module.exports = function viewConfig(app) {
    app.set('view engine', 'ejs');
    app.set('views', path.join(process.cwd(), 'src/views')); // process.cwd() = raiz do projeto
    // console.log(path.join(process.cwd(), 'src/views'));
}
