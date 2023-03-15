import express from 'express';

import orderController from '../controllers/orderController';

import authValidation from '../middlewares/authValidation';

const orderRouter = express.Router();

orderRouter.get('/', orderController.getOrders);

orderRouter.post('/', authValidation, orderController.createOrder);

export default orderRouter;