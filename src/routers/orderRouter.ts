import express from 'express';

import orderController from '../controllers/orderController';

import authValidation from '../middlewares/authValidation';
import orderValidation from '../middlewares/orderValidation';

const orderRouter = express.Router();

orderRouter.get('/', orderController.getOrders);

orderRouter.post('/', authValidation, orderValidation, orderController.createOrder);

export default orderRouter;