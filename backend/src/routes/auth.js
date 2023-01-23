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

//login route
router.post('/login',authController.handleLogin)
//sign route
router.post('/register',authController.handleRegistation)



export default router;