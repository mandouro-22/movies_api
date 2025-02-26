import express from "express";
import morgan from "morgan";
import { initDB } from "./utils/db.js";
import { auth } from "./routes/index.js";

initDB();

const app = express();
app.use(morgan("dev"));
app.use(express.json());
app.get("/", (req, res) => {
  res.json({ message: "Welcome To Movies App" });
});

app.use("/api/auth", auth);

// create layer handl error
app.use((req, res) => {
  res.status(404).json({ message: "Page Not Found" });
});

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: "Something broke!" });
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
