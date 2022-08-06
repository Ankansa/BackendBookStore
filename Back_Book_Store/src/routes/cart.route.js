import express from 'express';
import { userAuth } from '../middlewares/auth.middleware';
import * as cartcontroller from '../controllers/cart.controller';

const router = express.Router();


//add book to cart by id ##############

router.post('/:_id',userAuth,cartcontroller.cart);


export default router;
