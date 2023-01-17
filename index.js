const express = require("express");
const app = express();
const path = require("path");
app.use(express.static(path.join(__dirname, "/public")));
app.set("view engine", "ejs");

app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname, "html/index.html"));
});
app.listen(3000, function () {
  console.log("3000번에서 서버 대기중");
});
