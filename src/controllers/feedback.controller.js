import { config } from "../config/config.js";

const dummyData = [
  {
    category: "Product Features",
    rating: "5",
    comment:
      "bjksvbskajvkaskjsv avajbv avavasivabvbasvbkabkv kjvbabvbabvkabkjvbabva vavjksabvjsabvbsakbvasbvavkabsjvkbasbvjbasvbkavbka",
  },
  {
    category: "Product Pricing",
    rating: "4",
    comment:
      "bjksvbskajvkaskjsv avajbv avavasivabvbasvbkabkvjasbkjbasbvkbskbvkbsjkabvjbaskjvbabvbabvkabkjvbabvavavjksabvjsabvbsakbvasbvavkabsjvkbasbvjbasvbkacsahsauusagva",
  },
  {
    category: "Product Pricing",
    rating: "2",
    comment: "8628963298b928vc8c6v28626528c2b5255252526552",
  },
  {
    category: "Product Usability",
    rating: "1",
    comment: "cjbkakjcbbkaca",
  },
  {
    category: "Product Features",
    rating: "0",
    comment: "cjbkakjcbbkaca",
  },
];

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

    let response = dummyData;

    // Filter feedback by category if specified
    if (category && category.trim() !== "") {
      response = dummyData.filter((item) =>
        item.category.toLowerCase().includes(category.toLowerCase().trim())
      );
    }

    res.status(200).json({ data: response });
  } catch (error) {
    console.error("Error retrieving feedback:", error);
    res.status(500).json({ error: "Error retrieving feedback" });
  }
};

export { handleSubmitFeedback, handleGetFeedbackByCategory };
