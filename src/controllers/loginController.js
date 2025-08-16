const Homeform = require('../models/loginModel.js');

module.exports.renderLogin = (req,res)=>{
    res.render('login');
}


module.exports.register = async(req,res)=>{
    const homeform = new Homeform(req.body);
    try {
        const register = await homeform.register()

        if(homeform.errors.length > 0){
            console.log(`Erros detectados: ${homeform.errors}`);
            req.flash('error', `${homeform.errors}`)
            return res.redirect('/login')
        }
        req.flash('success', 'cadastro efetuado');
        return res.redirect('/login');

    } catch (error) {
        console.log(error)
    }
}

module.exports.login = async (req,res)=>{
    const homeform = new Homeform(req.body)

    if(req.session.user){
            req.flash('error', 'Sessão ativa');
            console.log('já esta logado')
            return res.redirect('/login')
        }

    try {
        const login = await homeform.login()
        if(homeform.errors.length > 0){
            console.log(`Erros detectados: ${homeform.errors}`);
            req.flash('error', `${homeform.errors}`)
            return res.redirect('/login')
        }

        req.session.user = homeform.user
        req.flash('success', 'Login efetuado');

        req.session.save(()=>{ // crio a session
            // console.log(`user: ${homeform.user}`);
            console.log(`session: ${req.session.user}`);
            return res.redirect('/');
        })
        
    } catch (error) {
        console.log(error)
    }

}

module.exports.logout = (req, res)=>{
    if(!req.session.user){
        req.flash('error', 'Não há sessão ativa')
        return res.redirect('/login');
        
    } 
    console.log('Sessão esta ativa');

    req.flash('Success', 'sessão encerrada');
    req.session.destroy((err)=>{
        if(err){
            return res.status(500).send('Erro ao encerrar a sessão');
        } 
    })
    console.log('Sessão encerrada');
    return res.redirect('/login');
}