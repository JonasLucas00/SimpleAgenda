const mongoose = require('mongoose');
require('dotenv').config();

let isConnected = false; // controla se já existe uma conexão ativa

async function connectDB() {
    if (isConnected) {
        // Se já está conectado, reaproveita
        console.log('🔄 Conexão MongoDB reaproveitada.');
        return;
    }

    try {
        const conn = await mongoose.connect(process.env.CONNECTIONSTRING);
        isConnected = conn.connections[0].readyState === 1;
        console.log('Conectado ao MongoDB com sucesso!');
    } catch (error) {
        console.error('Erro ao conectar ao MongoDB:', error);
    }
}

module.exports = connectDB;
