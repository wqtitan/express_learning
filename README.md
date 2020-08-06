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
```

## 4 cors 跨域请求

`npm i cors`

`app.use(require("cors")());` 立即执行函数返回一个跨域可用的中间件，供 express 使用

`fetch('http://localhost:4000/products').then(res => res.json()).then(data => console.log(data))`

`res.json()`方法接收一个 Response 流，并将其读取完成。返回一个 Promise，Promise 的解析 resolve 结果是将文本体解析为 JSON。
