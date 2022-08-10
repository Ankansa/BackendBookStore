import express from 'express';
import * as customer from '../controllers/customer_details.controller';
import { customerDetailsValidator } from '../validators/customerDetails.validator';
import { userAuth } from '../middlewares/auth.middleware';

const router = express.Router();



//route to create a new customer details

router.post('', customerDetailsValidator, userAuth, customer.customerDetails);





export default router;
