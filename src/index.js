import { app } from "./app.js";
import { config } from "./config/config.js";
import connectDB from "./config/dbConnection.js";

connectDB()
  .then(() => {
    // Start the Express server
    app.listen(config.port, () => {
      console.log(
        `Server is running at port: http://localhost:/${config.port}`
      );
    });
  })
  .catch((err) => {
    // Log an error message if MongoDB connection fails
    console.error("MONGO db connection failed !!! ", err);
  });
