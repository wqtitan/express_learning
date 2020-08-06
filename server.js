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

app.use(express.json());
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
  // .skip(1).limit(2) 跳过1条，展示2条  用于分页
  // const data = await Product.find().skip(1).limit(2);
  // const data = await Product.find().where({ title: "产品1" });
  const data = await Product.find().sort({ _id: -1 });
  res.send(data);
});
// #6 动态URI
app.get("/products/:id", async (req, res) => {
  // 从URI中捕获参数id
  const data = await Product.findById(req.params.id);
  res.send(data);
});

// #7 POST请求
app.post("/products", async (req, res) => {
  const data = req.body;
  const product = await Product.create(data);
  res.send(product);
});

// #8 PUT请求 修改数据库
app.put("/products/:id", async (req, res) => {
  const product = await Product.findById(req.params.id);
  product.title = req.body.title;
  await product.save();
  res.send(product);
});

app.listen(4000, () => {
  console.log("App listening on port 4000");
});
