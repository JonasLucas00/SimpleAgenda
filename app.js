const express = require('express');
const app = express();
const path = require('path');
const router = require('./src/routes/route.js');
const viewConfig = require('./config/viewConfig.js');
const sessionConfig = require('./config/sessionConfig.js');
const flashConfig = require('./config/flashConfig.js');
const connectDBlocal = require('./config/mongoDBlocal.js');
const middlewareSession = require('./src/middlewares/midlewares.js');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

sessionConfig(app);
flashConfig(app)
viewConfig(app);
app.use(middlewareSession.sessionMidlleware);
app.use('/', router);

app.on('ready', () => {
    app.listen(3000, () => {
        console.log('Servidor iniciado http://localhost:3000')
    })
})
connectDBlocal(app);

