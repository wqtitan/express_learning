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
