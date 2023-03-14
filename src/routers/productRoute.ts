import express from 'express';
import productController from '../controllers/productController';

const productRouter = express.Router();

productRouter.post('/', productController.createProduct);

export default productRouter;
