import HttpStatus from 'http-status-codes';
import * as Cartservice from '../services/cart.service'


//add book to cart by id ##############

export const cart = async (req, res, next) => {
    try {
      const data = await Cartservice.cart(req.body.Email, req.params._id);
      res.status(HttpStatus.OK).json({
        code: HttpStatus.CREATED,
        data: data,
        message: "The cart is updated"
      });
    } catch (error) {
      res.status(HttpStatus.BAD_REQUEST).json({
        code: HttpStatus.BAD_REQUEST,
        message: `${error}`
      });
    }
  };