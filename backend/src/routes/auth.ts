import { Router } from "express";
import {signUp, signIn, signOut} from "../controllers/authController"

const router = Router()

router.post("/signup", signUp);
router.post("/signin", signIn);

export default router;