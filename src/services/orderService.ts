import orderModel from '../models/orderModel';

const getOrders = async () => {
  const products = await orderModel.getOrders();
  return products;
};

export default {
  getOrders,
};