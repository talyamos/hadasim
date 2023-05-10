import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import {
  addMemberController,
  getAllMembersController,
  getMemberController,
} from "./controllers/Member.js";
dotenv.config();
const { PORT, DB_USER, DB_PASS, DB_HOST, DB_NAME } = process.env;

mongoose.set("strictQuery", true);
const app = express();
app.use(express.json());
app.use(express.static("client/build"));

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");
  next();
});

app.get("/api/members", getAllMembersController);
app.get("/api/member/:memberId", getMemberController);
app.post("/api/addMember", addMemberController);

app.get("*", (req, res) => {
  res.sendFile(__dirname + "/client/build/index.html");
});

try {
  await mongoose.connect(
    `mongodb+srv://${DB_USER}:${DB_PASS}@${DB_HOST}/${DB_NAME}?retryWrites=true&w=majority`,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  );
  console.log("Connected to MongoDB!");
  app.listen(PORT || 8000, () => {
    console.log("Listening on port 8000...");
  });
} catch (err) {
  console.error("Error connecting to MongoDB:", err.message);
}
