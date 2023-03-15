import Joi from 'joi';

export const dataLoginSchema = Joi.object({
  username: Joi.string().required(),
  password: Joi.string().required(),
});

export const dataProductSchema = Joi.object({
  name: Joi.string().min(3).required(),
  amount: Joi.string().min(3).required(),
});