import HttpStatus from 'http-status-codes';
import * as Bookservice from '../services/book.service'

//get all books #####################

export const allBooks = async (req, res, next) => {
  try {
    const data = await Bookservice.allBook(req.body);
    res.status(HttpStatus.OK).json({
      code: HttpStatus.OK,
      data: data,
      message: 'All books fatched successfully'
    });
  } catch (error) {
    res.status(HttpStatus.BAD_REQUEST).json({
      code: HttpStatus.BAD_REQUEST,
      message: `${error}`
    });
  }
};

//get book by id #####################

export const singleBook = async (req, res, next) => {
  try {
    const data = await Noteservice.singleBook(req.body.Email, req.params._id);
    res.status(HttpStatus.OK).json({
      code: HttpStatus.OK,
      data: data,
      message: "Book fatched successfully"
    });
  } catch (error) {
    res.status(HttpStatus.BAD_REQUEST).json({
      code: HttpStatus.BAD_REQUEST,
      message: `${error}`
    });
  }
};

