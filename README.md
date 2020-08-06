# express_learning

## 1 认识 Express

## 2 快速上手路由

```js
// server.js
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
```

终端 `nodemon server.js` 启动

## 3 静态文件托管

```js
app.use(express.static("public"));

app.use("/static", express.static("public"));

const Product = mongoose.model(
  "Product",
  new mongoose.Schema({
    title: String,
  })
);
```

## 4 cors 跨域请求

`npm i cors`

`app.use(require("cors")());` 立即执行函数返回一个跨域可用的中间件，供 express 使用

`fetch('http://localhost:4000/products').then(res => res.json()).then(data => console.log(data))`

`res.json()`方法接收一个 Response 流，并将其读取完成。返回一个 Promise，Promise 的解析 resolve 结果是将文本体解析为 JSON。

## 5 MongoDB 基础

`npm i mongoose`

```js
const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/express-test", { useUnifiedTopology: true, useNewUrlParser: true });
```

插入数据`insertMany()`

获取数据`find()`

## 6 MongoDB 查询

`.skip(1).limit(2)` 跳过 1 条，展示 2 条

`.where({ title: "产品1" })` 添加查询条件

`.sort({ _id: -1 })` 倒序排列

捕获参数

```js
app.get("/products/:id", async (req, res) => {
  // 从URI中捕获参数id
  const data = await Product.findById(req.params.id);
  res.send(data);
});
```

## 7

VS Code 安装 REST Client 用来测试请求接口

根目录中创建 test.http 文件

```http
@uri=http://localhost:4000/
###

GET {{uri}}
###

GET  {{uri}}products
###

POST {{uri}}products
###

POST {{uri}}products
Content-Type: application/json

{
  "title":"产品4"
}
```

## 8 PUT 修改数据库

```js
app.put("/products/:id", async (req, res) => {
  const product = await Product.findById(req.params.id);
  product.title = req.body.title;
  await product.save();
  res.send(product);
});
```
