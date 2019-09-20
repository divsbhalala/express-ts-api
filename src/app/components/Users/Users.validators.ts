import * as Joi from 'joi';

export const Register = Joi.object({
  fbId: Joi.string().required(),
  name: Joi.string().required(),
});
