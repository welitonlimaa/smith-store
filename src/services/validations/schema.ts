import Joi from 'joi';

const dataLoginSchema = Joi.object({
  username: Joi.string().required(),
  password: Joi.string().required(),
});

export default dataLoginSchema;