const session = require('express-session');
const MongoStore = require('connect-mongo');
require('dotenv').config();

module.exports = function sessionConfig(app){
    app.use(session({
      secret: 'sua-chave-secreta',      // usada para assinar o cookie
      resave: false,                    // não reseta a sessão se nada mudou
      saveUninitialized: false,         // só salva/cria sessão se algo for adicionado
      store: MongoStore.create({
        mongoUrl: process.env.CONNECTIONSTRING,            // onde o connect-mongo vai salvar as sessões
        ttl: 60 * 60,                   // tempo de vida da sessão em segundos (1h)
        collectionName: 'sessoes'       // nome da coleção no Mongo
      }),
      cookie: {
        maxAge: 1000 * 60 * 60          // duração do cookie no navegador (1h)
      }
    }));
    console.log('session configurada');
}
