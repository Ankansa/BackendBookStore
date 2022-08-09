import express from 'express';
import { userAuth } from '../middlewares/auth.middleware';
import * as wishlistcontroller from '../controllers/wishlist.controller';

const router = express.Router();

//add book to wishlist by id ##############

router.post('/:_id',userAuth,wishlistcontroller.wishlist);


export default router;
