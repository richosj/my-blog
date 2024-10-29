import { Router } from "express";
import {
  loginUser,
  logoutUser,
  registerUser,
} from "../controllers/authController";

const router = Router();
router.post("/login", loginUser);
router.post("/logout", logoutUser);
router.post("/register", registerUser as any);

export default router;
