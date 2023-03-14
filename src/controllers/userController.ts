import { Request, Response } from 'express';

import { createToken } from '../auth/authenticator';

import userService from '../services/userService';

const createUser = async (req: Request, res: Response) => {
  const dataUser = req.body;

  const user = await userService.createUser(dataUser);

  delete user.password;

  const token = createToken(user);

  return res.status(201).json({ token });
};

export default {
  createUser,
};