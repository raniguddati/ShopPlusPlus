import { Router } from 'express';
import login from './login.js';
import signup from './signup.js';
// import getUser from './getUser.js';
import verify from './verify.js';
import {
    loginUserValidation,
    signUpUserValidation,
    jwtValidation,
} from '../../utils/validation.js';

const router = Router();

router.post('/login', loginUserValidation, login);
router.post('/signup', signUpUserValidation, signup);

// router.get('/user', getUser);
router.post('/verify', jwtValidation, verify);


export default router