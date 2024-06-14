import express from "express";
import authRoutes from "./auth.routes.js";
import feedbackRoutes from "./feedback.routes.js";

const router = express.Router();

router.use("/auth", authRoutes);
router.use("/feedback", feedbackRoutes);

export default router;
