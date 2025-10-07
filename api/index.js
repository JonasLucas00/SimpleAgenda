const express = require('express');
const path = require('path');
const router = require('../src/routes/route.js');
const viewConfig = require('../config/viewConfig.js');
const sessionConfig = require('../config/sessionConfig.js');
const flashConfig = require('../config/flashConfig.js');
const connectDB = require('../config/mongoDB.js');
const middlewareSession = require('../src/middlewares/midlewares.js');
const serverless = require('serverless-http');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, '../public')));

sessionConfig(app);
flashConfig(app);
viewConfig(app);
app.use(middlewareSession.sessionMidlleware);
app.use('/', router);
connectDB();

module.exports = app;
module.exports.handler = serverless(app);
