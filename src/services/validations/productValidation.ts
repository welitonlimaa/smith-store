import { IProduct } from '../../interfaces';
import { dataProductSchema } from './schema';

const validateProduct = (data: IProduct) => {
  const { error } = dataProductSchema.validate(data);

  if (error) {
    const { message } = error;
    if (message.includes('required')) { 
      return { type: 400, message: error.message }; 
    }
    return { type: 422, message: error.message }; 
  }
  
  return { type: null, message: '' };
};

export default validateProduct;