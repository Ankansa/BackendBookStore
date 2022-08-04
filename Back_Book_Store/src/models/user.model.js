import { any } from '@hapi/joi';
import { Schema, model } from 'mongoose';

const userSchema = new Schema(
  {
    FirstName: {
      type: String,
      require: true
    },
    SecondName: {
      type: String,
      require: true
    },
    Email: {
      type: String,
      require: true
    },
    Password: {
      type: String,
      require: true
    }

  },
  {
    timestamps: true
  }
);

export default model('User', userSchema);
