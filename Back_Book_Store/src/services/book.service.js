


//create new user #####################
export const allBook = async (body) => {
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