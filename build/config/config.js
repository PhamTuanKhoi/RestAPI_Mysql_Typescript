"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const HOST = process.env.SREVER_HOST || 'localhost';
const PORT = process.env.SERVER_PORT || 3000;
const MYSQL_HOST = process.env.HOST_NAME || 'localhost';
const MYSQL_DATABASE = process.env.MYSQL_DATABASE;
const MYSQL_USER = process.env.MYSQL_USER || 'root';
const MYSQL_PASSWORD = process.env.MYSQL_PASSWORD || '';
const MYSQL = {
    hostname: MYSQL_HOST,
    username: MYSQL_USER,
    password: MYSQL_PASSWORD,
    database: MYSQL_DATABASE
};
const SERVER = {
    host: HOST,
    port: PORT
};
const config = {
    server: SERVER,
    mysql: MYSQL
};
exports.default = config;
