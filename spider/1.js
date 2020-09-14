var request = require("request"); //npm install request
var cheerio = require("cheerio"); //npm install cheerio
var fs = require("fs"); //npm install fs
var async = require("async"); //npm install async
const mkdirp = require("mkdirp"); //npm install mkdirp
const path = require("path"); //npm install path

start();
function start() {
    var toPath = "tuolaji";
    // mkdir(toPath);
    var url =
        "https://v3-xg-web.ixigua.com/a7f0519aa2f8ee5347ddf0e48b05d5db/5f5a1eea/video/tos/cn/tos-cn-vd-0026/a8865c0eadbd4cc4bae4050756d265bb/media-video-avc1/?a=1768&br=5310&bt=1770&cr=0&cs=0&cv=1&dr=0&ds=3&er=0&l=20200910193744010198064146191D6F97&lr=default&mime_type=video_mp4&qs=0&rc=anNtNXhxaHRldzMzPGQzM0ApNDg6OWQ8OWU6N2ZoNTNnZmdibWFyaF4zaGBfLS1iLi9zc2NiYy82NGEwLTNgNTQ0MGM6Yw%3D%3D&vl=&vr="; // "https://nodelover.me/courses";
    request(encodeURI(url))
        .on("error", function (err) {
            console.log(err);
        })
        .pipe(fs.createWriteStream("spider/" + toPath + ".mp4"))
        .on("finish", () => {
            console.log("视频下载成功：%s", url.url);
        });
}

/**
 * 创建目录
 */
function mkdir(title) {
    try {
        console.log("准备创建目录：%s", title);
        if (fs.existsSync("./output/" + title)) {
            console.log("目录：%s 已经存在".error, title);
        } else {
            mkdirp(title, function (err) {
                console.log("目录：%s 创建成功".info, title);
            });
        }
    } catch (e) {
        console.log(e);
    }
}

//api
var api =
    "https://www.ixigua.com/api/videov2/author/video?_signature=_02B4Z6wo00f01LUP5zgAAIBB-EE1Y0OtVeS1DuOAAHIhe4&author_id=58626912855&type=video&max_time=0";
