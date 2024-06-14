import express from "express";
import cors from "cors";
import helmet from "helmet";
import cookieParser from "cookie-parser";
import { config } from "./config/config.js";
import rootRouter from "./routes/index.js";

const app = express();

// Middlewares
app.use(cors({ origin: config.corsOrigin, credentials: true }));
app.use(helmet());
app.use(cookieParser());
app.use(express.static("public"));
app.use(express.json({ limit: "16kb" }));
app.use(express.urlencoded({ extended: true, limit: "16kb" }));

// Default route for the root path
app.get("/", (req, res) => {
  res.status(200).send("API is working properly.");
});
app.use("/api", rootRouter);

export { app };
