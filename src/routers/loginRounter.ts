import express from 'express';

import userController from '../controllers/userController';

const loginRouter = express.Router();

loginRouter.post('/', userController.login);

export default loginRouter;