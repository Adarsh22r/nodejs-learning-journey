const express = require("express");
const { connectMongoDb } = require("./connection");
const userRouter = require("./routes/user");
const { logReqRes } = require("./middlewares");
const app = express();
const PORT = 8000;

connectMongoDb("mongodb://127.0.0.1:27017/youtube-app-1")
  .then(() => console.log("MongoDB connected!"))
  .catch((err) => console.log("Mongo Error:", err));

app.use(express.urlencoded({ extended: false }));

app.use(logReqRes("log.txt"));

app.use("/users", userRouter);

app.listen(PORT, () => console.log(`Server started at http://localhost:8000`));
