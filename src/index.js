import { app } from "./app.js";
import { config } from "./config/config.js";

// Start the Express server
app.listen(config.port, () => {
  console.log(`Server is running at port: http://localhost:/${config.port}`);
});
