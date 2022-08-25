import { Schema, model } from 'mongoose';


//This schema is difined for books.

const bookSchema = new Schema(
    {
        bookName: {
            type: String,
        },
        Descreption: {
            type: String,
        },

        bookImage: {
            type: String,
        },

        admin_user_id: {
            type: String,
        },

        discountPrice: {
            type: Number,
        },

        author: {
            type: String,
        },

        quantity: {
            type: String,
        },
        price: {
            type: Number,
        }
    },
    {
        timestamps: true
    }
);
export default model('Book', bookSchema);
