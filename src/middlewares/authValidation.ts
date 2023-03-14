import { Response, NextFunction } from 'express';

import { IReq } from '../interfaces';

import { verifyToken } from '../auth/authenticator';

const validateToken = (req: IReq, res: Response, next: NextFunction) => {
  try {
    const { authorization } = req.headers;
    if (!authorization) {
      return res.status(401).json({ message: 'Token not found' });
    }
    const payload = verifyToken(authorization);
    
    req.data = payload.data;
  
    next();
  } catch (error) {
    return res.status(401).json({ message: 'Invalid token' });
  }
};

export default validateToken;