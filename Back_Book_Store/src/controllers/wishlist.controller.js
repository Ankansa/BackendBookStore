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