import jwt, { SignOptions } from 'jsonwebtoken';
import { IPayload, IUser } from '../interfaces';

const secret = process.env.JWT_SECRET || 'naruto';

const JWT_CONFIG: SignOptions = {
  algorithm: 'HS256',
  expiresIn: '24h',
};

export const createToken = (data: IUser): string => jwt.sign({ data }, secret, JWT_CONFIG);

export const verifyToken = (token: string): IPayload => jwt.verify(token, secret) as IPayload;