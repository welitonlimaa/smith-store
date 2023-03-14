import { IUser } from '../interfaces';
import userModel from '../models/userModel';

const createUser = async (dataUser: IUser) => {
  const user = await userModel.createUser(dataUser);
  return user;
};

export default {
  createUser,
};