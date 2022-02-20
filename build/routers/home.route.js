"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
const express_1 = __importDefault(require("express"));
const homeController_1 = __importDefault(require("../controlers/homeController"));
const router = express_1.default.Router();
router.get('/product', homeController_1.default.getallProduct);
router.get('/product/:id', homeController_1.default.getProductByid);
router.post('/add-product', homeController_1.default.addProduct);
router.put('/updateProduct/:id', homeController_1.default.updateProduct);
router.delete('/deleteProduct/:id', homeController_1.default.deleteProduct);
module.exports = router;
