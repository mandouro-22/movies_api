import express from "express";
import morgan from "morgan";
import { initDB } from "./utils/db.js";
import { Users } from "./models/index.js";

initDB();

const app = express();
app.use(morgan("dev"));
app.get("/", (req, res) => {
  res.json({ message: "Welcome To Movies App" });
});

app.get("/users", async (req, res) => {
  const user = await Users.findAll();
  res.json(user);
});

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
