const express = require("express");

const app = express();

// #3 使用中间件，处理静态文件的托管
// app.use(express.static("public"));
// 添加访问路径，使访问更加可控  http://localhost:4000/static/index.html
app.use("/static", express.static("public"));

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
