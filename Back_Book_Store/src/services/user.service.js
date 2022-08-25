import User from '../models/user.model';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import Feedback from '../models/feedBack.model';




//create new user #####################
export const newUser = async (body) => {
  const check = await User.findOne({ Email: body.Email })
  if (check) {
    throw new Error("Email Id Already exist")
  } else {
    const salt = 10;
    const hassedPassword = await bcrypt.hash(body.password, salt)
    body.password = hassedPassword;
    const data = await User.create(body);
    return data;
  }
};

//Login a user ###########################
export const login = async (body) => {
  const check = await User.findOne({ Email: body.Email })
  if (check) {
    const comparePass = await bcrypt.compare(body.password, check.password);
    if (comparePass) {
      const loginToken = jwt.sign({ Email: check.Email, ID: check._id, Name: check.FullName }, process.env.LOGIN_TOKEN_SECRATE);
      return {"brtoken":loginToken,"Name": check.FullName}
    } else {
      throw new Error("Password is incorrect")
    }
  } else {
    throw new Error("Mail Is not exist")
  }
};

// For add feedback on book ########################

export const feedback = async (book_id, comment, Star,userName) => {
  const bookCheck = await Feedback.findOne({ 'productID': book_id })
  if (bookCheck) {
    bookCheck.userAdded.unshift({ 'feedback': comment, 'star': Star, 'UserName':userName })
    console.log("Book found and the bookCheck is ", bookCheck)
    console.log("Book found and the comment array is", bookCheck.userAdded)
    const addFeedback = await Feedback.findOneAndUpdate({ 'productID': book_id, }, { 'userAdded': bookCheck.userAdded }, { new: true })
    return addFeedback
  } else {
    const information = { 'productID': book_id, 'userAdded': [{ 'feedback': comment, 'star': Star, 'UserName':userName }] }
    const data = await Feedback.create(information)
    console.log("new feedback added", data)
    return data
  }

};

// For get all feedback on book ########################

export const getallfeedback = async (book_id) => {
  const allFeedback = await Feedback.findOne({ 'productID': book_id })
  console.log("allFeedback are : ",allFeedback)
  return allFeedback
  

};