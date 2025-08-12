const path = require('path');

module.exports = function viewConfig(app){
    app.set('view engine', 'ejs');
    app.set('views', path.join(__dirname, '../src/views'));
    // console.log(path.join(__dirname, '../src/views'));
}