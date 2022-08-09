import Wishlist from "../models/wishlist.model";
import Book from "../models/book.model";

// Add to wishlist ##################################

export const addwishlist= async(authMail,param_book_id)=>{
    const bookCheck = await Book.findOne({ _id: param_book_id })
  if (bookCheck) {

    let information = {
      'bookName': bookCheck.bookName,
      'description': bookCheck.description,
      'author': bookCheck.author,
      'price': bookCheck.price,
      'bookImage': bookCheck.bookImage,
      'productId': bookCheck._id,

    }
    // console.log("book checked sucessfull")
    // return bookCheck;
    const wishlistCheck = await Wishlist.findOne({ userId: authMail })


    if (wishlistCheck) {
      // console.log("wishlist checked sucessfull")
      // console.log(typeof wishlistCheck)
      // console.log(wishlistCheck.books)
      let found = false;
      wishlistCheck.books.forEach(element => {
        if (element.productId == param_book_id) {
          element.quantity = element.quantity + 1
          // console.log("same book updated")
          found = true;
        }
      });
      if (found == false) {
        wishlistCheck.books.push(information)
        // console.log("added new book")
        // console.log("Now the price is after add new book ",totalwishlistPrice)
      }

      const wishlistView = await Wishlist.findOneAndUpdate({ userId: authMail }, { books: wishlistCheck.books}, { new: true });
      return wishlistView

      // ----------------------------------------Finish---------------------------------------------


    } else {
      console.log("wishlist Is Not Exist new created")
      const createwishlist = await Wishlist.create({ 'userId': authMail, 'books': [information]})
      console.log("createwishlist", createwishlist)
      return createwishlist
    }


  } else {
    console.log("Book Is Not Exist")
    throw new Error("Book Is Not Exist")
  }

}

// Remove book details from wishlist ###############

export const removeBook = async (authEmail, params_book_id) => {
    const wishlistCheck = await Wishlist.findOne({ userId: authEmail })
    if (wishlistCheck) {
    //   console.log("wishlist checked sucessfull")
      // return("DONE done DONE")
      let found = false
      wishlistCheck.books.forEach(element => {
        if (element.productId == params_book_id) {
          let indexvalue = wishlistCheck.books.indexOf(element)
          wishlistCheck.books.splice(indexvalue, 1)
          found = true
          console.log("Book deleted sucessfully")
        }
      });
      if (found == false) {
        throw new Error("Book is not exist on wishlist")
      }
  
      const update_view_wishlist = Wishlist.findOneAndUpdate({ userId: authEmail }, { books: wishlistCheck.books }, { new: true })
      return update_view_wishlist
  
  
      // ========================Finish=========================================
  
    } else {
      console.log("User wishlist is not exist")
      throw new Error("User wishlist is not exist")
    }
  }