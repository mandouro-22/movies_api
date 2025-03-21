import express from "express";
import morgan from "morgan";
import { initDB } from "./utils/db.js";
import { auth, moveis, review, watchlists } from "./routes/index.js";
import { CreateAdminDefault } from "./utils/admin.js";

initDB().then(() => {
  CreateAdminDefault();
});

const app = express();
app.use(morgan("dev"));
app.use(express.json());
app.get("/", (req, res) => {
  res.json({ message: "Welcome To Movies App" });
});

app.use("/api/auth", auth);
app.use("/api/movies", moveis);
app.use("/api/reviews", review);
app.use("/api/watchList", watchlists);

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
