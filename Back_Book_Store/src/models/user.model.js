import { Schema, model } from 'mongoose';

const userSchema = new Schema(
  {
    FullName: {
      type: String,
      require: true
    },
    Email: {
      type: String,
      require: true
    },
    password: {
      type: String,
      require: true
    },
    mobileNumber: {
      type: String,
      require: true
    },

  },
  {
    timestamps: true
  }
);

export default model('User', userSchema);
