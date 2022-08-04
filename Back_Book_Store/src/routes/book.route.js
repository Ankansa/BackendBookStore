import express from 'express';
import { userAuth } from '../middlewares/auth.middleware';
import * as bookcontroller from '../controllers/book.controller';



const router = express.Router();

//get all books ##############

router.get('',userAuth,bookcontroller.allBooks);

//get book by id ##############

router.get('/:_id',userAuth,bookcontroller.singleBook);


export default router;
