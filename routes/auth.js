import { Router } from "express";
import { register, login, getMe } from "../controllers/authController.js";
import { checkAuth } from "../utils/checkAuth.js";

const router = new Router();

//registartion
router.post("/register", register);
//login
router.post("/login", login);
//get me
router.get("/me", checkAuth, getMe);

export default router;
