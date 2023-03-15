import { Request, Response } from 'express';

import productService from '../services/productService';

const createProduct = async (req: Request, res: Response) => {
  const dataProduct = req.body;

  const { type, message } = await productService.createProduct(dataProduct);
  if (type) return res.status(type).json({ message });
  
  return res.status(201).json(message);
};

const getProducts = async (_req: Request, res: Response) => {
  const products = await productService.getProducts();
  return res.status(200).json(products);
};

export default {
  createProduct,
  getProducts,
};