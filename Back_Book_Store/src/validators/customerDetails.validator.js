import Joi from '@hapi/joi';

export const customerDetailsValidator = (req, res, next) => {
    const schema = Joi.object({
        Name: Joi.string().min(2).required(),
        PhoneNumber: Joi.string().length(10).required(),
        Address: Joi.string().required(),
        City: Joi.string().min(2).required(),
        State: Joi.string().min(2).required(),
        Type: Joi.string(),
    });
    const { error, value } = schema.validate(req.body);
    if (error) {
        next(error);
    } else {
        req.validatedBody = value;
        next();
    }
};
