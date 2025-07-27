import express from 'express';
import { Signup, Signin, Google } from '../controllers/auth.controller.js'

const router = express.Router();

router.post('/signup', Signup)
router.post('/login', Signin);
router.post('/google', Google);

export default router;