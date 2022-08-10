import User from "../models/user.model";
import Book from '../models/book.model'



//get all books #####################
export const allBook = async (body) => {
  const usercheck = await User.find({ Email: body.Email })
  if (usercheck) {
    const allbook = await Book.find()
    return allbook
  } else {
    throw new Error("Not authorised user, login first")
  }
};

//get book by id #####################
export const singleBook = async (body, b_id) => {
  const usercheck = await User.find({ Email: body.Email })
  if (usercheck) {
    const book = await Book.find({ _id: b_id })
    if (book) {
      return book
    } else {
      throw new Error("Book Not Found")
    }
  } else {
    throw new Error("Not authorised user, login first")
  }
};