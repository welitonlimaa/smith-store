import express from 'express';

import loginRouter from './routers/loginRounter';

import orderRouter from './routers/orderRouter';

import productRouter from './routers/productRoute';

import userRouter from './routers/userRouter';

const app = express();

app.use(express.json());

app.use('/products', productRouter);

app.use('/users', userRouter);

app.use('/orders', orderRouter);

app.use('/login', loginRouter);

export default app;
