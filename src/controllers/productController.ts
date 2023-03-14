import { Request, Response } from 'express';
import productService from '../services/productService';

const createProduct = async (req: Request, res: Response) => {
  const dataProduct = req.body;

  const product = await productService.createProduct(dataProduct);
  return res.status(201).json(product);
};

export default {
  createProduct,
};