const express = require("express");
const bodyParser = require("body-parser");
const server = express();
server.use(bodyParser.text());
server.use(bodyParser.json());
server.use(bodyParser.urlencoded({ extends: false }));

server.post("/text", (req, res) => {
    var ct = req.headers["content-type"];
    var bd = req.body;
    console.log(ct); //只能识别text/plain的数据
    console.log(bd); //{ name: 'mike' }

    res.setHeader("Content-Type", ct);
    res.send(bd);
});
server.post("/json", (req, res) => {
    var ct = req.headers["content-type"];
    var bd = req.body;
    console.log(ct); //只能识别application/json的数据
    console.log(bd); //{ name: 'mike' }

    res.setHeader("Content-Type", ct);
    res.send(bd);
});
server.post("/urlencode", (req, res) => {
    var ct = req.headers["content-type"];
    var bd = req.body;
    console.log(ct); //只能识别application/x-www-form-urlencoded的数据
    console.log(bd); //{ name: 'mike' }

    res.setHeader("Content-Type", ct);
    res.send(bd);
});

server.listen(10);
console.log("server is listening port 10");
