const mongoose = require('mongoose');
const validator = require('validator');
const bcrypt = require('bcrypt');

const Schema = mongoose.Schema({
    email: String,
    password: String
});

const loginModel = mongoose.model('register', Schema);

class Homeform {
    constructor(body) {
        this.body = body;
        this.errors = []
        this.user = null
    }

    async register() {
        this.validador()
        if (this.errors.length > 0) return

        await this.alredyRegister()

        if (this.errors.length > 0) return

        try {
            const hashPassword = await bcrypt.hash(this.body.password, 10);

            const userData = await loginModel.create({ email: this.body.email, password: hashPassword });
            console.log(`Registro efetuado ${userData}`);
            return
        } catch (error) {
            console.error(`Erro no registro${error}`)
            return
        }
    }

    async login() {
        this.validador()
        if (this.errors.length > 0) return

        try {
            this.user = await loginModel.findOne({ email: this.body.email })
            console.log(this.user)
            if (this.user) {
                console.log(`usuario localizado`);
                return
            }
            console.log('nao localizado')
            return this.errors.push('usuario não localizado')

        } catch (error) {
            console.log(error);
            return
        }

    }

    validador() {
        this.cleanUp()
        const isValid = validator.isEmail(this.body.email)
        // console.log(isValid)
        if (!isValid) return this.errors.push('email invalido')
        return
    }

    // async encrypt(){
    //     this.body.password = 
    // }

    async alredyRegister() {
        const isRegistered = await loginModel.findOne({ email: this.body.email })
        if (isRegistered) return this.errors.push('usuario já esta registrado')
        console.log(`Ainda não registrado`)

    }

    cleanUp() {
        if (typeof this.body.email && typeof this.body.password !== 'string') {
            return this.errors.push('diferente de string') // trocar para outro erro na flash message. trocar valor do body para ""?
        }

        if (this.body.password.length < 3 || this.body.password.length > 12) {
            return this.errors.push('Erro comprimento senha')// alterar depois a msg
        }

        this.body = {
            email: this.body.email.toLowerCase(),
            password: this.body.password
        }
        // console.log(this.body)
        return

    }
}

module.exports = Homeform;
//689d013056f7a657a9c6e8c2