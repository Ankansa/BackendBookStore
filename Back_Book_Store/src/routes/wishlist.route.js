import express from 'express';
import { userAuth } from '../middlewares/auth.middleware';
import * as wishlistcontroller from '../controllers/wishlist.controller';

const router = express.Router();

//add book to wishlist by id ##############

router.post('/:_id',userAuth,wishlistcontroller.wishlist);

// Remove book from cart ###############

router.put('/:_id',userAuth,wishlistcontroller.removeBook);


export default router;
