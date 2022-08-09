// import User from "../models/user.model";
import Book from '../models/book.model';
import Cart from '../models/cart.model';



//add book to cart by id ##############

export const cart = async (authEmail, params_book_id) => {
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
      // console.log("cart checked sucessfull")
      // console.log(typeof cartCheck)
      // console.log(cartCheck.books)
      let found = false;
      let totalCartPrice = 0  //10
      cartCheck.books.forEach(element => {
        if (element.productId == params_book_id) {
          element.quantity = element.quantity + 1
          // console.log("same book updated")
          found = true;
          totalCartPrice = totalCartPrice + (element.price * element.quantity)

        } else {
          totalCartPrice = totalCartPrice + (element.price * element.quantity)
          // console.log("Same book set price ",totalCartPrice)
        }
      });
      if (found == false) {
        totalCartPrice = totalCartPrice + information.price
        cartCheck.books.push(information)
        // console.log("added new book")
        // console.log("Now the price is after add new book ",totalCartPrice)
      }

      const cartView = await Cart.findOneAndUpdate({ userId: authEmail }, { books: cartCheck.books, cart_total: totalCartPrice }, { new: true });
      return cartView

      // ----------------------------------------Finish---------------------------------------------


    } else {
      console.log("Cart Is Not Exist new created")
      const createCart = await Cart.create({ 'userId': authEmail, 'books': [information], 'cart_total': bookCheck.price })
      console.log("createCart", createCart)
      return createCart
    }


  } else {
    console.log("Book Is Not Exist")
    throw new Error("Book Is Not Exist")
  }

}

// get cart book details from cart ###############

export const CartBooks = async (authEmail) => {
  const getBooks = await Cart.findOne({ userId: authEmail })
  if (getBooks) {
    return getBooks;
  } else {
    throw new Error("User not have any cart")
  }
}

// Remove book details from cart ###############

export const removeBook = async (authEmail, params_book_id) => {
  const cartCheck = await Cart.findOne({ userId: authEmail })
  if (cartCheck) {
    console.log("Cart checked sucessfull")
    // return("DONE done DONE")
    let found = false
    cartCheck.books.forEach(element => {
      if (element.productId == params_book_id) {
        let indexvalue = cartCheck.books.indexOf(element)
        cartCheck.books.splice(indexvalue, 1)
        found = true
        console.log("Book deleted sucessfully")
      }
    });
    if (found == false) {
      throw new Error("Book is not exist on cart")
    }

    const update_view_cart = Cart.findOneAndUpdate({ userId: authEmail }, { books: cartCheck.books }, { new: true })
    return update_view_cart


    // ========================Finish=========================================

  } else {
    console.log("User cart is not exist")
    throw new Error("User cart is not exist")
  }
}

// For change the isPurchased value to true #################################333

export const purchasedValue= async(authEmail)=>{
  const value= Cart.findOneAndUpdate({userId:authEmail},{isPurchased:true},{new:true})
  if(value){
    return value
  }else{
    throw new Error("User don't have any cart")
  }

}