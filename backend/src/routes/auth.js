import { Router } from "express";
import User from "../models/users";
import bcrypt from "bcrypt";
import generateTokens from "../JWT/generateTokens";
import {
	signUpBodyValidation,
	logInBodyValidation,
} from "../utils/validationSchema";

const authController= require("../controller/authController")
const router = Router();


router.post('/login',authController.handleLogin)
router.post('/register',authController.handleRegistation)



export default router;