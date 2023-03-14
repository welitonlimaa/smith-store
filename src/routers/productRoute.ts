import express from 'express';
import productController from '../controllers/productController';

const productRouter = express.Router();

productRouter.post('/', productController.createProduct);

productRouter.get('/', productController.getProducts);

export default productRouter;
