const express = require('express');
const app = express();
const router = require('./src/routes/route.js');
const viewConfig = require('./config/viewConfig.js');
const sessionConfig = require('./config/sessionConfig.js');
const flashConfig = require('./config/flashConfig.js');
const connectDB = require('./config/mongoDB.js');

app.use(express.json());
app.use(express.urlencoded({extended:true}));

sessionConfig(app);
flashConfig(app)
viewConfig(app);
app.use('/', router);
connectDB(app);

app.on('ready', ()=>{
    app.listen(3000, ()=>{
        console.log('Servidor iniciado http://localhost:3000')
    })
})