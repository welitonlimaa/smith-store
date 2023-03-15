import { IOrder } from '../interfaces';
import orderModel from '../models/orderModel';

import productModel from '../models/productModel';

import validateOrder from './validations/orderValidation';

const getOrders = async () => {
  const products = await orderModel.getOrders();
  return products;
};

const createOrder = async (dataOrder: IOrder, userId: number) => {
  const error = validateOrder(dataOrder);
  if (error.type) return error;
  const { productsIds } = dataOrder;

  const orderId = await orderModel.createOrder(userId);

  await Promise.all(productsIds.map(async (productId: number) => {
    await productModel.updateProductOrder(orderId, productId);
  }));

  const order = {
    userId,
    productsIds,
  };

  return { type: null, message: order };
};

export default {
  getOrders,
  createOrder,
};