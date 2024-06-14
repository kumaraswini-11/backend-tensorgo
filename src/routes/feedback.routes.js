import express from "express";
import {
  handleSubmitFeedback,
  handleGetFeedbackByCategory,
} from "../controllers/feedback.controller.js";

const router = express.Router();
router.post("/", handleSubmitFeedback);
router.get("/category/:category", handleGetFeedbackByCategory);

export default router;
