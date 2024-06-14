import express from "express";
import { handleGoogleLogin } from "../controllers/auth.controller.js";

const router = express.Router();
router.post("/google", handleGoogleLogin);

export default router;
