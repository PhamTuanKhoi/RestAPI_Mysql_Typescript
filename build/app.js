"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const http_1 = __importDefault(require("http"));
const body_parser_1 = __importDefault(require("body-parser"));
const express_1 = __importDefault(require("express"));
const config_1 = __importDefault(require("./config/config"));
const loggin_1 = __importDefault(require("./config/loggin"));
const home_route_1 = __importDefault(require("./routers/home.route"));
const app = (0, express_1.default)();
const NAMESPACE = 'server';
// parser the request
app.use(body_parser_1.default.urlencoded({ extended: false }));
app.use(body_parser_1.default.json());
// loggin the request
app.use((req, res, next) => {
    loggin_1.default.info(NAMESPACE, `METHOD - [${req.method}], url - [${req.url}], IP - [${req.socket.remoteAddress}]`);
    res.on(`finish`, () => {
        loggin_1.default.info(NAMESPACE, `METHOD - [${req.method}], url - [${req.url}], IP - [${req.socket.remoteAddress}], STATUS - [${res.statusCode}]`);
    });
    next();
});
// Rules of our api
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
    if (req.method === 'OPTIONS') {
        res.header('Access-Control-Allow-Methods', 'GET PATCH DELETE POST PUT');
        return res.status(200).json();
    }
    next();
});
// api
app.use('/home', home_route_1.default);
// error handling
app.use((req, res, next) => {
    const error = new Error('not found');
    res.status(404).json({ message: error.message });
    next();
});
// create the server
const httpServer = http_1.default.createServer(app);
httpServer.listen(config_1.default.server.port, () => {
    loggin_1.default.info(NAMESPACE, `Server listen on ${config_1.default.server.host}: ${config_1.default.server.port}`);
});
