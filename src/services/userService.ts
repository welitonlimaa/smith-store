import { createToken } from '../auth/authenticator';

import { IUser, ILogin } from '../interfaces';

import userModel from '../models/userModel';

import validateLogin from './validations/loginValidation';

import validateUser from './validations/userValidation';

const createUser = async (dataUser: IUser) => {
  const error = validateUser(dataUser);
  if (error.type) return error;

  const user = await userModel.createUser(dataUser);

  delete user.password;
  const token = createToken(user);

  return { type: null, message: token };
};

const login = async (dataLogin: ILogin) => {
  const error = validateLogin(dataLogin);
  if (error.type) return error;

  const users = await userModel.login(dataLogin);
  if (users.length === 0 || users[0].password !== dataLogin.password) {
    return { type: 401, message: 'Username or password invalid' };
  }
  const token = createToken(users[0]);

  return { type: null, message: token };
};

export default {
  createUser,
  login,
};