import { number } from '@hapi/joi';
import { Schema, model } from 'mongoose';

const CustomerSchema = new Schema(
    {
        userId: {
            type: String
        },
        Name: {
            type: String,
            require: true
        },
        PhoneNumber: {
            type: Number,
            require: true
        },
        Address: {
            type: String,
            require: true
        },
        City: {
            type: String,
            require: true
        },
        State: {
            type: String,
            require: true
        },
        Type: {
            type: String,
        
        }

    },
    {
        timestamps: true
    }
);

export default model('Customer_Details', CustomerSchema);
