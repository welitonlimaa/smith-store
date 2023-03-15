import { ILogin } from '../../interfaces';
import { dataLoginSchema } from './schema';

const validateLogin = (data: ILogin) => {
  const { error } = dataLoginSchema.validate(data);

  if (error) {
    return { type: 400, message: error.message };
  }

  return { type: null, message: '' };
};

export default validateLogin;