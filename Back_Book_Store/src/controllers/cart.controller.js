import HttpStatus from 'http-status-codes';
import * as Cartservice from '../services/cart.service'


//add book to cart by id ##############

export const cart = async (req, res, next) => {
    try {
      const data = await Cartservice.cart(req.body.Email, req.params._id);
      res.status(HttpStatus.CREATED).json({
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

  // get cart book details from cart ###############

  export const CartBooks = async (req, res, next) => {
    try {
      const data = await Cartservice.CartBooks(req.body.Email);
      res.status(HttpStatus.OK).json({
        code: HttpStatus.OK,
        data: data,
        message: "Cart details fatched sucessfully"
      });
    } catch (error) {
      res.status(HttpStatus.BAD_REQUEST).json({
        code: HttpStatus.BAD_REQUEST,
        message: `${error}`
      });
    }
  };

  // Remove book details from cart ###############

  export const removeBook = async (req, res, next) => {
    try {
      const data = await Cartservice.removeBook(req.body.Email,req.params._id);
      res.status(HttpStatus.OK).json({
        code: HttpStatus.OK,
        data: data,
        message: "Book deleted sucessfully"
      });
    } catch (error) {
      res.status(HttpStatus.BAD_REQUEST).json({
        code: HttpStatus.BAD_REQUEST,
        message: `${error}`
      });
    }
  };

  // For change the isPurchased value true #################################333

  export const purchasedValueTrue= async(req, res, next) =>{
    try {
      const data = await Cartservice.purchasedValueTrue(req.body.Email);
      res.status(HttpStatus.OK).json({
        code: HttpStatus.OK,
        data: data,
        message: "Book deleted sucessfully"
      });
    } catch (error) {
      res.status(HttpStatus.BAD_REQUEST).json({
        code: HttpStatus.BAD_REQUEST,
        message: `${error}`
      });
    }
  }

  // For change the isPurchased value false #################################333

  export const purchasedValueFalse= async(req, res, next) =>{
    try {
      const data = await Cartservice.purchasedValueFalse(req.body.Email);
      res.status(HttpStatus.OK).json({
        code: HttpStatus.OK,
        data: data,
        message: "Book deleted sucessfully"
      });
    } catch (error) {
      res.status(HttpStatus.BAD_REQUEST).json({
        code: HttpStatus.BAD_REQUEST,
        message: `${error}`
      });
    }
  }