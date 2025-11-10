import express from "express";
import dotenv from "dotenv";
import "colors";
import morgan from "morgan";
import cors from "cors";
import testRoutes from "./Routes/testRoutes.js";

// configure environment variables
dotenv.config();

// express app
const app = express();

// middlewares
app.use(express.json());
app.use(cors());
app.use(morgan("dev"));

// routes
app.use("/api/v1/test", testRoutes);

// default route
app.get("/", (req, res) => {
  res.send("🚀 Server is running successfully!");
});

// error handling middleware (safer color usage)
app.use((err, req, res, next) => {
  // make sure err and stack exist before calling .red
  const stackOrMessage = err && err.stack ? err.stack : String(err);
  console.error(stackOrMessage.red);
  res.status(500).json({
    success: false,
    message: "Something went wrong!",
    error: err && err.message ? err.message : "Unknown error"
  });
});

// port
const PORT = process.env.PORT || 5000;

// server start
app.listen(PORT, () => {
  const env = process.env.NODE_ENV || "development";
  console.log(
    `✅ Node Server Running in ${env} Mode on Port ${PORT}`.bgCyan.white
  );
});
