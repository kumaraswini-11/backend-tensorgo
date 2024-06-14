import { config } from "../config/config.js";

const handleSubmitFeedback = async (req, res) => {
  try {
    const feedback = req.body;

    res.status(201).json({ message: "Feedback submited successfully." });
  } catch (error) {
    res.status(500).json({ error: "Error submitting feedback" });
  }
};

const handleGetFeedbackByCategory = async (req, res) => {
  try {
    const { category } = req.params;
    // console.log("entered", category);

    let response = [];

    // Filter feedback by category if specified
    // if (category && category.trim() !== "") {
    //   response = dummyData.filter((item) =>
    //     item.category.toLowerCase().includes(category.toLowerCase().trim())
    //   );
    // }

    res.status(200).json({ data: response });
  } catch (error) {
    console.error("Error retrieving feedback:", error);
    res.status(500).json({ error: "Error retrieving feedback" });
  }
};

export { handleSubmitFeedback, handleGetFeedbackByCategory };
