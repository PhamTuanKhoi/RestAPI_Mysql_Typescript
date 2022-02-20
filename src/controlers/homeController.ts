import express, { request, response, NextFunction } from "express";
import loggin from "../config/loggin";
import { Connect } from "../config/mysql";

const NAMESPACES = 'Product'

// [GET] /home/product
const getallProduct = (req: express.Request, res: express.Response, next: NextFunction) =>{
    const query  = `select * from loai`;

    Connect(query)
    .then(result => {
        return res.status(200).json({ result})
    })
    .catch(error => {
        loggin.error(NAMESPACES, error.message, error);

        return res.status(404).json({ message: error.message, error});
    });
};

// [GET] /home/product/:id
const getProductByid = (req: express.Request, res: express.Response, next: NextFunction) =>{

    const id = req.params.id;
    const query  = `select * from loai where loai_id = ${id}`;

    Connect(query)
    .then(result => {
        return res.status(200).json({ result})
    })
    .catch(error => {
        loggin.error(NAMESPACES, error.message, error);

        return res.status(404).json({ message: error.message, error});
    });
};

//[POST] /home/addProduct
const addProduct = (req: express.Request, res: express.Response, next: NextFunction) =>{
    const name = req.body.name;
    const query  = `insert into loai (tenloai) values ('${name}')`;

    Connect(query)
    .then(result => {
        return res.status(200).json({ result})
    })
    .catch(error => {
        loggin.error(NAMESPACES, error.message, error);

        return res.status(404).json({ message: error.message, error});
    });
};

// [PUT] /home/updateProduct/:id
const updateProduct = (req: express.Request, res: express.Response, next: NextFunction) =>{
    const id = req.params.id;
    const name = req.body.name;
    const query  = `UPDATE loai SET tenloai = '${name}' WHERE loai_id = ${id}`;

    Connect(query)
    .then(result => {
        return res.status(200).json({ result})
    })
    .catch(error => {
        loggin.error(NAMESPACES, error.message, error);

        return res.status(404).json({ message: error.message, error});
    });
};

// [DELETE] /home/product/:id
const deleteProduct = (req: express.Request, res: express.Response, next: NextFunction) =>{
    const id = req.params.id;
    const query  = `delete from loai where loai_id = ${id}`;

    Connect(query)
    .then(result => {
        return res.status(200).json({ result})
    })
    .catch(error => {
        loggin.error(NAMESPACES, error.message, error);

        return res.status(404).json({ message: error.message, error});
    });
};


export default {
    getallProduct,
    getProductByid,
    addProduct,
    updateProduct,
    deleteProduct
}