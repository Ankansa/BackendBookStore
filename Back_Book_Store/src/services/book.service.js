import User from "../models/user.model";
import Book from '../models/book.model';



//get all books #####################
export const allBook = async (body) => {
  const usercheck = await User.findOne({ Email: body.Email })
  if (usercheck) {
    const allbook = await Book.find ()
    return allbook
  } else {
    throw new Error("Not authorised user, login first")
  }
};

//get book by id #####################
export const singleBook = async (authEmail, params_book_id) => {
  const usercheck = await User.findOne({ Email: authEmail })
  if (usercheck) {
    const book = await Book.findOne({ _id: params_book_id })
    if (book) {
      return book
    } else {
      throw new Error("Book Not Found")
    }
  } else {
    throw new Error("Not authorised user, login first")
  }
};

