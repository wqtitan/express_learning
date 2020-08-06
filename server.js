const express = require("express");

const app = express();

// 定义请求接口的方法  get post ...
app.get("/", (req, res) => {
  res.send({ page: "home" });
});
app.get("/about", (req, res) => {
  res.send({ page: "about" });
});
app.listen(4000, () => {
  console.log("App listening on port 4000");
});
