import { healthCheck } from "./routes/health";
import express from "express";
import "./config"
import { connectDB } from "./db";

const app = express();
const port = process.env.PORT;

app.get("/health", healthCheck);

connectDB().then(() => {
  app.listen(port, () => {
      console.log(`Server running at http://localhost:${port}`);
  });
}).catch(err => {
  console.error("Database connection failed", err);
  process.exit(1);
});

