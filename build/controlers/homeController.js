"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const loggin_1 = __importDefault(require("../config/loggin"));
const mysql_1 = require("../config/mysql");
const NAMESPACES = 'Product';
// [GET] /home/product
const getallProduct = (req, res, next) => {
    const query = `select * from loai`;
    (0, mysql_1.Connect)(query)
        .then(result => {
        return res.status(200).json({ result });
    })
        .catch(error => {
        loggin_1.default.error(NAMESPACES, error.message, error);
        return res.status(404).json({ message: error.message, error });
    });
};
// [GET] /home/product/:id
const getProductByid = (req, res, next) => {
    const id = req.params.id;
    const query = `select * from loai where loai_id = ${id}`;
    (0, mysql_1.Connect)(query)
        .then(result => {
        return res.status(200).json({ result });
    })
        .catch(error => {
        loggin_1.default.error(NAMESPACES, error.message, error);
        return res.status(404).json({ message: error.message, error });
    });
};
//[POST] /home/addProduct
const addProduct = (req, res, next) => {
    const name = req.body.name;
    const query = `insert into loai (tenloai) values ('${name}')`;
    (0, mysql_1.Connect)(query)
        .then(result => {
        return res.status(200).json({ result });
    })
        .catch(error => {
        loggin_1.default.error(NAMESPACES, error.message, error);
        return res.status(404).json({ message: error.message, error });
    });
};
// [PUT] /home/updateProduct/:id
const updateProduct = (req, res, next) => {
    const id = req.params.id;
    const name = req.body.name;
    const query = `UPDATE loai SET tenloai = '${name}' WHERE loai_id = ${id}`;
    (0, mysql_1.Connect)(query)
        .then(result => {
        return res.status(200).json({ result });
    })
        .catch(error => {
        loggin_1.default.error(NAMESPACES, error.message, error);
        return res.status(404).json({ message: error.message, error });
    });
};
// [DELETE] /home/product/:id
const deleteProduct = (req, res, next) => {
    const id = req.params.id;
    const query = `delete from loai where loai_id = ${id}`;
    (0, mysql_1.Connect)(query)
        .then(result => {
        return res.status(200).json({ result });
    })
        .catch(error => {
        loggin_1.default.error(NAMESPACES, error.message, error);
        return res.status(404).json({ message: error.message, error });
    });
};
exports.default = {
    getallProduct,
    getProductByid,
    addProduct,
    updateProduct,
    deleteProduct
};
