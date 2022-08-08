import express from 'express';
import { userAuth } from '../middlewares/auth.middleware';
import * as cartcontroller from '../controllers/cart.controller';

const router = express.Router();


//add book to cart by id ##############
// Pass book id

router.post('/:_id',userAuth,cartcontroller.cart);

// get all book details from cart ###############

router.get('',userAuth,cartcontroller.CartBooks);

// Remove book from cart ###############

router.put('/:_id',userAuth,cartcontroller.removeBook);



export default router;
