import { healthCheck } from "./routes/health";
import express from "express";
import dotenv from "dotenv";
dotenv.config();

const app = express();
const port = 8080;

app.get("/health", healthCheck);

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
