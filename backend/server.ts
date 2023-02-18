import * as dotenv from "dotenv";
dotenv.config();
import express from "express";
import cors from "cors";
import connectDB from "./db/conn";
import auth from "./routes/auth";

const app = express();
connectDB();

app.use(cors());
app.use(express.json());
app.use("/auth", auth);

app.listen(8000, () => {
  console.log("Server is running");
});
