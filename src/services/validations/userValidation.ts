import { IUser } from '../../interfaces';
import { dataUserSchema } from './schema';

const validateUser = (data: IUser) => {
  const { error } = dataUserSchema.validate(data);

  if (error) {
    const { message } = error;
    if (message.includes('required')) {
      return { type: 400, message: error.message };
    }
    return { type: 422, message: error.message };
  }

  return { type: null, message: '' };
};

export default validateUser;