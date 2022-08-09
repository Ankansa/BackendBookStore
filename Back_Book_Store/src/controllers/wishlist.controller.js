import HttpStatus from 'http-status-codes';
import * as Wishlistservice from '../services/wishlist.service'

// Add to wishlist ##################################

export const wishlist = async (req, res, next) => {
    try {
      const data = await Wishlistservice.addwishlist(req.body.Email, req.params._id);
      res.status(HttpStatus.CREATED).json({
        code: HttpStatus.CREATED,
        data: data,
        message: "The wishlist is updated"
      });
    } catch (error) {
      res.status(HttpStatus.BAD_REQUEST).json({
        code: HttpStatus.BAD_REQUEST,
        message: `${error}`
      });
    }
  };

  // Remove book details from wishlist ###############

  export const removeBook = async (req, res, next) => {
    try {
      const data = await Wishlistservice.removeBook(req.body.Email,req.params._id);
      res.status(HttpStatus.OK).json({
        code: HttpStatus.OK,
        data: data,
        message: "Book removed from wishlist sucessfully"
      });
    } catch (error) {
      res.status(HttpStatus.BAD_REQUEST).json({
        code: HttpStatus.BAD_REQUEST,
        message: `${error}`
      });
    }
  };

  // get wishlist book details from user wishlist ###############

  export const WishlistBooks = async (req, res, next) => {
    try {
      const data = await Wishlistservice.WishlistBooks(req.body.Email);
      res.status(HttpStatus.OK).json({
        code: HttpStatus.OK,
        data: data,
        message: "Wishlist details fatched sucessfully"
      });
    } catch (error) {
      res.status(HttpStatus.BAD_REQUEST).json({
        code: HttpStatus.BAD_REQUEST,
        message: `${error}`
      });
    }
  };