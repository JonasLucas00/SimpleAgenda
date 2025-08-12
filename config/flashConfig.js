const flash = require('connect-flash');

module.exports = function flashConfig(app){
    app.use(flash())
    app.use((req, res, next) => {
    res.locals.success = req.flash('success');
    res.locals.error = req.flash('error');
    next();
});
}