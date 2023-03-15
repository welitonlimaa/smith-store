import { Request, Response, NextFunction } from 'express';

const orderValidation = (req: Request, res: Response, next: NextFunction) => {
  const { productsIds } = req.body;
  if (!productsIds) {
    return res.status(400).json({ message: '"productsIds" is required' });
  }

  next();
};

export default orderValidation;