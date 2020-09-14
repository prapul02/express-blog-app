require("./dbConfig/db.js");
const express = require("express");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const postRouter = require("./routers/postRouter");
const authorRouter = require("./routers/authorRouter");
const adminRouter = require("./routers/adminRouter");
const cors = require("cors");

const app = express();

app.use(bodyParser.json());
app.use(cors());
app.use(cookieParser());

app.get("/", (req, res) => {
  res.send("<h1>Blog API Server!</h1>");
});

app.use("/posts", postRouter);
app.use("/authors", authorRouter);
app.use("/admin", adminRouter);

app.listen(8080, () => {
  console.log("Server started");
});
