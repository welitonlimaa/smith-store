import { IOrder } from '../../interfaces';
import { dataOrderSchema } from './schema';

const validateOrder = (data: IOrder) => {
  const { error } = dataOrderSchema.validate(data);

  if (error) {
    const { message } = error;
    if (message.includes('required')) {
      return { type: 400, message: error.message };
    }
    if (message.includes('number') || message.includes('items')) {
      return { type: 422, message: '"productsIds" must include only numbers' };
    }
    return { type: 422, message: error.message };
  }

  return { type: null, message: '' };
};

export default validateOrder;