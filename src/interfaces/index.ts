import { Request } from 'express';

export interface IUser {
  username: string,
  vocation: string,
  level: number,
  password?: string
}

export interface IPayload {
  data: IUser,
}

export interface IReq extends Request {
  data: object,
}