import http from 'http';
import bodyParser from 'body-parser';
import express from 'express';
import config from './config/config'
import loggin from './config/loggin';
import homeRouter from './routers/home.route';



const app = express();
const NAMESPACE = 'server';
// parser the request
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
// loggin the request
app.use((req, res, next) => {
    loggin.info(NAMESPACE, `METHOD - [${req.method}], url - [${req.url}], IP - [${req.socket.remoteAddress}]`);

    res.on(`finish`, () => {
    loggin.info(NAMESPACE, `METHOD - [${req.method}], url - [${req.url}], IP - [${req.socket.remoteAddress}], STATUS - [${res.statusCode}]`);
    })

    next();
})
// Rules of our api
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');

    if (req.method === 'OPTIONS'){
        res.header('Access-Control-Allow-Methods', 'GET PATCH DELETE POST PUT');
        return res.status(200).json();
    }

    next();
})

// api
app.use('/home', homeRouter);

// error handling
app.use((req, res, next) => {
    const error = new Error('not found');
    res.status(404).json({message: error.message});
    next();
})
// create the server
const httpServer = http.createServer(app)
httpServer.listen(config.server.port, ()=>{
    loggin.info(NAMESPACE, `Server listen on ${config.server.host}: ${config.server.port}`);
});