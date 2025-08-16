const mongoose = require('mongoose');

const contatoSchema = mongoose.Schema({
    nome: String,
    telefone: String,
    email: String,
});

const contatoModel = mongoose.model('contato', contatoSchema);

class Contato{
    constructor(body){
        this.body = body;
        this.erros = []
    }

    async addContact(){
        this.validation()
        if(this.erros.length > 0) return

        try {
           const contato = await contatoModel.create(this.body);
            console.log('Contato salvo')
            return;
        } catch (error) {
            console.error(error)
            return;
        }
    }
    
    validation(){
        this.cleanUp()
        
        if(this.body.nome.length < 1 || this.body.nome.length > 64){
            return this.erros.push('Campo nome invalido');
        }

        if(this.body.telefone.length < 1 && this.body.email.length < 1){
            return this.erros.push('Preencha um dos campos de contato')
        }

        if(this.body.telefone.length > 64 || this.body.email.length > 64){
            return this.erros.push('Campos de contato muito longos');
        }
        // console.log(this.body.nome)

        
    }

    cleanUp(){
        // console.log(this.body.nome)
        for(let keys in this.body){
            if(typeof this.body[keys] !== 'string'){
                return this.erros.push('Erro cleanUp')
            }
        }
        return;
    }
}

module.exports = Contato;