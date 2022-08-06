import User from "../models/user.model";
import Book from '../models/book.model';
import Cart from '../models/cart.model';



//add book to cart by id ##############

export const cart = async (authEmail, params_book_id) => {
  const userCheck = await User.findOne({ Email: authEmail })
  if (userCheck) {
    console.log("user checked sucessfull")
    // return userCheck;
    const bookCheck = await Book.findOne({ _id: params_book_id })
    if (bookCheck) {

      let information = {
        'bookName': bookCheck.bookName,
        'description': bookCheck.description,
        'author': bookCheck.author,
        'price': bookCheck.price,
        'bookImage': bookCheck.bookImage,
        'discountPrice': bookCheck.discountPrice,
        'productId': bookCheck._id,

      }
      console.log("book checked sucessfull")
      // return bookCheck;
      const cartCheck = await Cart.findOne({ userId: authEmail })


      if (cartCheck) {
        console.log("cart checked sucessfull")
        console.log(typeof cartCheck)
        // console.log(cartCheck.books)
        let found = false;
        cartCheck.books.forEach(element => {
          if (element.productId == params_book_id) {
            element.quantity = element.quantity + 1
            console.log("same book updated")
            found = true;
          }
        });
        if (found == false) {
          cartCheck.books.push(information)
          console.log("added new book")
        }

        // -------------------------------------------------------------------------------------


        const cartView = await Cart.findOneAndUpdate({ userId: authEmail }, { books: cartCheck.books }, { new: true });
        return cartView
      } else {
        console.log("Cart Is Not Exist new created")
        const createCart = await Cart.create({ 'userId': authEmail, 'books': [information], 'cart_total': bookCheck.price })
        console.log("createCart", createCart)
        return createCart
        // return ("New Cart created")
      }


    } else {
      console.log("Book Is Not Exist")
      throw new Error("Book Is Not Exist")
      // const createCart= await Cart.create({userId:authEmail},{books:[]})
    }
  } else {
    throw new Error("Not authorised user, login first")
  }
}