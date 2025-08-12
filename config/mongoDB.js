const mongoose = require('mongoose');
require('dotenv').config();


module.exports = async function connectDB(app){
    try {
        await mongoose.connect(process.env.CONNECTIONSTRING)
        app.emit('ready');
        console.log('BD conectado')
    } catch (error) {
        console.error(error)
    }

    process.on('SIGINT', async () => {
    console.log('Encerrando app...');
    await mongoose.disconnect();
    process.exit(); // Encerra o processo, finaliza DB com ctrl+c
    });
}