import { Request, Response, NextFunction } from 'express';

import { verifyToken } from '../auth/authenticator';

const authValidation = (req: Request, res: Response, next: NextFunction) => {
  try {
    const { authorization } = req.headers;
    if (!authorization) {
      return res.status(401).json({ message: 'Token not found' });
    }
    const payload = verifyToken(authorization);
    
    req.body.data = payload.data;
  
    next();
  } catch (error) {
    return res.status(401).json({ message: 'Invalid token' });
  }
};

export default authValidation;