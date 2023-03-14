import { IProduct } from '../interfaces';
import productModel from '../models/productModel';

const createProduct = async (dataProduct: IProduct) => {
  const product = await productModel.createProduct(dataProduct);
  return product;
};

export default { 
  createProduct,
};