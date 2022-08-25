import HttpStatus from 'http-status-codes';
import jwt from 'jsonwebtoken';

/**
 * Middleware to authenticate if user has a valid Authorization token
 * Authorization: Bearer <token>
 *
 * @param {Object} req
 * @param {Object} res
 * @param {Function} next
 */
export const userAuth = async (req, res, next) => {
  try {
    let bearerToken = req.header('Authorization');
    if (!bearerToken)
      throw {
        code: HttpStatus.BAD_REQUEST,
        message: 'Authorization token is required'
      };
    bearerToken = bearerToken.split(' ')[1];

    const user = await jwt.verify(bearerToken, process.env.LOGIN_TOKEN_SECRATE);
    req.body.Email=user.Email;
    req.body.Name=user.Name;
    console.log("The req.body.Name is :",req.body.Name)
    console.log("The req.body.Email is :",req.body.Email)
    next();
  } catch (error) {
    next(error);
  }
};
