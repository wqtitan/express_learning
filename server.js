const express = require("express");

const app = express();

// #5 Mongodb
const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/express-test", { useUnifiedTopology: true, useNewUrlParser: true });
// 定义一个模型
const Product = mongoose.model(
  "Product",
  new mongoose.Schema({
    title: String,
  })
);
// 向数据库插入数据
// Product.insertMany([{ title: "产品1" }, { title: "产品2" }, { title: "产品3" }]);

app.use(require("cors")());
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

// #4
// app.get("/products", (req, res) => {
//   res.send([
//     { id: 1, title: "Product A" },
//     { id: 2, title: "Product B" },
//     { id: 3, title: "Product C" },
//   ]);
// });

// 从数据库取数据
app.get("/products", async (req, res) => {
  res.send(await Product.find());
});

app.listen(4000, () => {
  console.log("App listening on port 4000");
});
