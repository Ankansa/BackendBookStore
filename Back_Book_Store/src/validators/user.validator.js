import Joi from '@hapi/joi';

export const newUserValidator = (req, res, next) => {
  const schema = Joi.object({
    FullName: Joi.string().min(2).required(),
    Email: Joi.string().email().trim(true).required(),
    password: Joi.string().min(6).required(),
    mobileNumber: Joi.string().required(), 
  });
  const { error, value } = schema.validate(req.body);
  if (error) {
    next(error);
  } else {
    req.validatedBody = value;
    next();
  }
};
