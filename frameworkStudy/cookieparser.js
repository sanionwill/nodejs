const express = require("express");
const cookieParser = require("cookie-parser");
const server = express();
server.use(cookieParser("ASDFGHJJJJJKKKKKLQWERTYUIOPZXCVBNM"));

server.get("/", (req, res) => {
    res.send(req.path + " ok");
});

server.get("/set", (req, res) => {
    res.cookie("token", "China", {
        maxAge: 1000 * 60 * 60,
        signed: true,
        httpOnly: true,
    }); //token值会被加密
    res.cookie("username", "Mike", {
        maxAge: 1000 * 60 * 60,
        signed: false,
    }); //username值明文显示

    res.send(req.path + " ok");
});

server.get("/get", (req, res) => {
    console.log(req.cookies); //{ username: 'Mike' }
    console.log(req.cookies.username); //Mike
    console.log(req.signedCookies); //[Object: null prototype] { token: 'China' }
    console.log(req.signedCookies.token); //China

    res.send(req.path + " ok");
});

server.get("/delete/:ckname", (req, res) => {
    res.clearCookie(req.params.ckname); //需要指定待删除cookie的名称

    res.send(req.path + " ok");
});

server.listen(10);
console.log("server is listening port 10");
