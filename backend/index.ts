import "./config";
import express from "express";
import { connectDB } from "./db";
import bountyRoutes from "./routes/bounty"; // Import the bounty routes

const app = express();
const port = process.env.PORT;

app.use(express.json()); // Middleware for parsing JSON bodies

app.use("/api", bountyRoutes);

connectDB()
  .then(() => {
    app.listen(port, () => {
      console.log(`Server running at http://localhost:${port}`);
    });
  })
  .catch((err) => {
    console.error("Database connection failed", err);
    process.exit(1);
  });
