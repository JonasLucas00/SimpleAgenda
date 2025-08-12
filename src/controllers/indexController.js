module.exports.renderIndex = (req,res)=>{
    res.render('index');
}

module.exports.formIndexController = (req,res)=>{
    req.flash('error', 'teste');
    res.redirect('/');
}