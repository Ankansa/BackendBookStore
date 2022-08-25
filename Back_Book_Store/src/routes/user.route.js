import express from 'express';
import * as userController from '../controllers/user.controller';
import { newUserValidator } from '../validators/user.validator';
import { userAuth } from '../middlewares/auth.middleware';


const router = express.Router();



//route to create a new user
router.post('', newUserValidator, userController.newUser);

//route to login user 
router.post('/login', userController.login);

// For add Feedback on book ############################

router.post('/feedback/:_id',userAuth,userController.feedback)

// For get all feedback on book ########################

router.get('/allfeedback/:_id',userController.getallfeedback)


export default router;
