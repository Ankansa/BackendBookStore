import User from '../models/user.model';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';





//create new user #####################
export const newUser = async (body) => {
  const check = await User.findOne({ Email: body.Email })
  if (check) {
    throw new Error("Email Id Already exist")
  } else {
    const salt = 10;
    const hassedPassword = await bcrypt.hash(body.Password, salt)
    body.Password = hassedPassword;
    const data = await User.create(body);
    return data;
  }
};

//Login a user ###########################
export const login = async (body) => {
  const check = await User.findOne({ Email: body.Email })
  if (check) {
    const comparePass = await bcrypt.compare(body.Password, check.Password);
    if (comparePass) {
      const loginToken = jwt.sign({ Email: check.Email, ID: check._id }, process.env.LOGIN_TOKEN_SECRATE);
      return loginToken
    } else {
      throw new Error("Password is incorrect")
    }
  } else {
    throw new Error("Mail Is not exist")
  }
};