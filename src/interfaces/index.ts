import { Request } from 'express';

export interface IProduct {
  id?: number,
  name: string,
  amount: string,
}

export interface IUser {
  username: string,
  vocation: string,
  level: number,
  password?: string
}

export interface IOrder {
  id: number,
  userId: number,
  productsIds: number[]
}

export interface ILogin {
  username: string,
  password: string
}

export interface IPayload {
  data: IUser,
}

export interface IReq extends Request {
  data: object,
}