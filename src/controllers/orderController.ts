import { Request, Response } from 'express';

import orderService from '../services/orderService';

const getOrders = async (_req: Request, res: Response) => {
  const orders = await orderService.getOrders();
  return res.status(200).json(orders);
};

const createOrder = async (req: Request, res: Response) => {
  const { body } = req;
  const { id: userId } = body.data;

  delete body.data;

  const { type, message } = await orderService.createOrder(body, userId);
  if (type) return res.status(type).json({ message });

  return res.status(201).json(message);
};

export default {
  getOrders,
  createOrder,
};