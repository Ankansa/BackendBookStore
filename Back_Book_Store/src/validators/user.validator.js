import Joi from '@hapi/joi';

export const newUserValidator = (req, res, next) => {
  const schema = Joi.object({
    FirstName: Joi.string().min(2).required(),
    SecondName: Joi.string().min(2).required(),
    Email: Joi.string().email().trim(true).required(),
    Password: Joi.string().min(6).required(),
  });
  const { error, value } = schema.validate(req.body);
  if (error) {
    next(error);
  } else {
    req.validatedBody = value;
    next();
  }
};
