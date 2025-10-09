module.exports.sessionMidlleware = (req, res, next) => {
    if (!req.session) {
        next()
    }
    // console.log(`ID midlleare: ${req.session.user._id}`)
    res.locals.user = req.session.user;
    next()
}

module.exports.verifySession = (req, res, next) => {
    if (!req.session.user) {
        req.flash('error', 'Inicie a sessão')
        return res.redirect('/login');
    }
    next();
}