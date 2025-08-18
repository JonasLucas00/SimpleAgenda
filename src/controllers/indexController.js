const Contatos = require('../models/contatosModel.js');

module.exports.renderIndex = async (req,res)=>{
    const contacts = await Contatos.getContacts();
    console.log(contacts);
    res.render('index', {contacts: contacts});
}