import express from 'express';
import homeController from '../controlers/homeController';

const router = express.Router();

router.get('/product', homeController.getallProduct);
router.get('/product/:id', homeController.getProductByid);
router.post('/add-product', homeController.addProduct);
router.put('/updateProduct/:id', homeController.updateProduct);
router.delete('/deleteProduct/:id', homeController.deleteProduct);

export = router;