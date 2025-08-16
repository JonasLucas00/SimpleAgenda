const Contato = require('../models/contatosModel.js');

module.exports.renderContato = (req,res)=>{
    res.render('contatos')
}

module.exports.contatosAdd = async(req,res)=>{
    const contato = new Contato(req.body);

    try {
        const user = await contato.addContact();

        if(contato.erros.length > 0){
            console.log(`${contato.erros}`)
            req.flash('error', `${contato.erros}`)
            return res.redirect('/contatos')
        }
        console.log('sucesso contatosAdd')
        req.flash('success', 'sucesso contatosAdd')

    } catch (error) {
        console.error(error)
        res.render('404')
    }
    
    res.redirect('/contatos')

}