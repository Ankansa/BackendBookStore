import express from 'express';
import { userAuth } from '../middlewares/auth.middleware';
import * as wishlistcontroller from '../controllers/wishlist.controller';

const router = express.Router();

//add book to wishlist by id ##############

router.post('/:_id',userAuth,wishlistcontroller.wishlist);

// Remove book from wishlist ###############

router.put('/:_id',userAuth,wishlistcontroller.removeBook);

// get all book details from user wishlist ###############

router.get('',userAuth,wishlistcontroller.WishlistBooks);


export default router;
