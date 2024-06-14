import Feedback from "../models/feedback.model.js";

const handleSubmitFeedback = async (req, res) => {
  try {
    const { category, rating, comment } = req.body;

    if (!category || !rating || !comment) {
      return res
        .status(400)
        .json({ error: "All fields (category, rating, comment) are required" });
    }

    const feedback = await Feedback.create({
      category,
      rating,
      comment,
    });

    res.status(201).json({ message: "Feedback submited successfully." });
  } catch (error) {
    res.status(500).json({ error: "Error submitting feedback" });
  }
};

const handleGetFeedbackByCategory = async (req, res) => {
  try {
    const { category } = req.query;

    // If category is not specified, fetch all feedback
    const filter = category ? { category } : {};
    const feedbackList = await Feedback.find(filter);

    res.status(200).json({ data: feedbackList });
  } catch (error) {
    console.error("Error retrieving feedback:", error);
    res.status(500).json({ error: "Error retrieving feedback" });
  }
};

export { handleSubmitFeedback, handleGetFeedbackByCategory };
