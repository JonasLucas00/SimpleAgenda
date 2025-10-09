const mongoose = require('mongoose');

const contatoSchema = mongoose.Schema({
    nome: String,
    telefone: String,
    email: String,
    id: String
});

const contatoModel = mongoose.model('contato', contatoSchema);

class Contato {
    constructor(body) {
        this.body = body;
        this.erros = []
    }

    async addContact(id) {
        this.validation()
        if (this.erros.length > 0) return

        try {
            const contato = await contatoModel.create({
                nome: this.body.nome,
                telefone: this.body.telefone,
                email: this.body.email,
                id: id

            });
            console.log(`ID Model: ${contato.id}`) //undefined
            console.log(contato.nome)
            return contato;
        } catch (error) {
            console.error(error)
            return;
        }
    }

    static async deleteContact(id) {
        await contatoModel.findByIdAndDelete(id);
        return
    }

    static async getContacts(_id) {
        try {
            const contacts = await contatoModel.find({ id: _id })
            return contacts
        } catch (error) {
            console.log(error)
            return
        }
    }

    static async getContactsById(id) {
        try {
            const contato = await contatoModel.findById(id);
            return contato
        } catch (error) {
            console.log(error)
            return
        }
    }

    async editContact() {
        this.validation()
        if (this.erros.length > 0) return

        try {
            const deletedContact = await contatoModel.findByIdAndUpdate(this.body.id, this.body, { new: true })
            return deletedContact
        } catch (error) {
            console.log(`Erro model: ${error}`)
            return
        }
    }

    validation() {
        this.cleanUp()

        if (this.body.nome.length < 1 || this.body.nome.length > 64) {
            return this.erros.push('Campo nome invalido');
        }

        if (this.body.telefone.length < 1 && this.body.email.length < 1) {
            return this.erros.push('Preencha um dos campos de contato')
        }

        if (this.body.telefone.length > 64 || this.body.email.length > 64) {
            return this.erros.push('Campos de contato muito longos');
        }
        // console.log(this.body.nome)


    }

    cleanUp() {
        // console.log(this.body.nome)
        for (let keys in this.body) {
            if (typeof this.body[keys] !== 'string') {
                return this.erros.push('Erro cleanUp')
            }
        }
        return;
    }
}

module.exports = Contato;