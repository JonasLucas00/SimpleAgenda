const Contato = require('../models/contatosModel.js');

module.exports.renderContato = (req,res)=>{
    res.render('contatos', {contato: {}})
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

module.exports.contatosEdit = async (req,res)=>{
    // console.log(req.params.id)
    const contato = await Contato.getContactsById(req.params.id)
    res.render('contatos', {contato: contato});
}

module.exports.editEdit = async (req, res)=>{
    const contato = new Contato(req.body);

    try {
        const deletedContact = await contato.editContact();
        if(contato.erros.length > 0){
            req.flash('error', `${contato.erros}`)
            return res.redirect(`/contatos/edit/${req.body.id}`)
        }
        req.flash('success', 'Contato editado!')
        return res.redirect(`/contatos/edit/${req.body.id}`)
        
    } catch (error) {
        console.log(`erro editEdit ${error}`);
        return res.redirect(`/contatos/edit/${req.body.id}`)
    }

}

module.exports.contatosDelete = async (req,res)=>{
    console.log(req.body.id)
    try {
        await Contato.deleteContact(req.body.id)
        // console.log('Contato apagado');
        req.flash('success', 'Contato Apagado');
        return res.redirect('/')
    } catch (error) {
        console.log(error)
        return res.redirect('404');
    }
}
