import { IProduct } from '../interfaces';

import productModel from '../models/productModel';

import validateProduct from './validations/productValidation';

const createProduct = async (dataProduct: IProduct) => {
  const error = validateProduct(dataProduct);
  if (error.type) return error;

  const product = await productModel.createProduct(dataProduct);
  return { type: null, message: product };
};

const getProducts = async () => {
  const products = await productModel.getProducts();
  return products;
};

export default { 
  createProduct,
  getProducts,
};