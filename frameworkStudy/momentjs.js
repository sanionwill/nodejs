const express = require("express");
const moment = require("moment");
const addTimestamp = (str) => {
    return (req, res, next) => {
        req.timestamp = moment().format(str);
        next();
    };
};
const server = express();

server.get("/", addTimestamp("YYYY-MM-DD HH:mm:ss"), (req, res) => {
    res.send("timestamp is " + req.timestamp);
});
server.listen(10);
console.log("server is listening port 10");
