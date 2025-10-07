const path = require('path');
const ejs = require('ejs')

module.exports = function viewConfig(app) {
    app.set('view engine', 'ejs');
    app.set('views', path.join(__dirname, '..', 'src', 'views'));
}
