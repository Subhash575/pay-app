import express from "express";
import { connectDB } from "./db.js";
import { rootRoute } from "./routes/index.js";
import cors from "cors";

const app = express();

app.use(cors());
app.use(express.json());
app.get("/", (req, res) => {
  res.json({ message: "Hi there" });
});

app.use("/api/v1", rootRoute);

const PORT = process.env.PORT || PORT;
connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`Server start at PORT: ${PORT}`);
  });
});
