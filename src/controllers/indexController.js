const Contatos = require('../models/contatosModel.js');

module.exports.renderIndex = async (req, res) => {
    const contacts = await Contatos.getContacts(req.session.user._id);
    console.log(`Index ID: ${req.session.user._id}`);
    res.render('index', { contacts: contacts });
}