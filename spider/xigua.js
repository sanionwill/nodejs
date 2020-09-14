var request = require("request"); //npm install request
var cheerio = require("cheerio"); //npm install cheerio
var fs = require("fs"); //npm install fs
var async = require("async"); //npm install async
const mkdirp = require("mkdirp"); //npm install mkdirp
const path = require("path"); //npm install path

var options = {
    uri: "",
    dirfile: "./output/", //保存目录
    downLimit: 2, //图片并行下载上限
};
start();
function start() {
    var url = "http://www.baidu.com"; // "https://nodelover.me/courses";
    down(url);
}

async function down(url) {
    //首页
    var prolist = await new Promise((resolve) => {
        request(url, (error, response, body) => {
            if (!error && response.statusCode == 200) {
                var $ = cheerio.load(body, {
                    normalizeWhitespace: true,
                    decodeEntities: false,
                });
                const list = [];
                $(".course-item.c1").each(function (i, obj) {
                    let json = {
                        title:
                            $(obj).find(".link h1").text() +
                            $(obj).find(".course-type.vip").text(),
                        othertitle: $(obj).find(".desc").text(),
                        class: $(obj).find(".subtitle small").eq(0).text(),
                        Releasetime: $(obj)
                            .find(".subtitle small")
                            .eq(1)
                            .text(),
                        coursetime: $(obj).find(".subtitle small").eq(2).text(),
                        url: $(obj).find(".link").attr("href"),
                    };
                    list.push(json);
                });
                resolve(list);
            }
        });
    });

    //项目
    for (var opt of prolist) {
        if (!opt.title) {
            return;
        }
        await mkdir(opt.title);
        var vidolist = await new Promise((resolve) => {
            request(
                "https://nodelover.me" + opt.url,
                (error, response, body) => {
                    if (!error && response.statusCode == 200) {
                        var $ = cheerio.load(body, {
                            normalizeWhitespace: true,
                            decodeEntities: false,
                        });
                        const list = [];
                        $(".video-list li").each(function (i, obj) {
                            let json = {
                                title: $(obj).find("a").text(),
                                url:
                                    "http://cdn.nodelover.me/video_bucket" +
                                    $(obj)
                                        .find("a")
                                        .attr("href")
                                        .replace("/course", "") +
                                    ".mp4",
                            };
                            list.push(json);
                        });
                        resolve(list);
                    }
                }
            );
        });
        await sleep(2000);
        //下载视频
        await downliu(opt.title, vidolist, function () {
            console.log(opt.title + "下载结束".info, opt.title);
        });
    }
}

/**
 * 创建目录
 */
function mkdir(title) {
    console.log("准备创建目录：%s", title);
    if (fs.existsSync(options.dirfile + title)) {
        console.log("目录：%s 已经存在".error, title);
    } else {
        mkdirp(options.dirfile + title, function (err) {
            console.log("目录：%s 创建成功".info, title);
        });
    }
}

function sleep(duration) {
    return new Promise((resolve, reject) => {
        setTimeout(resolve, duration);
    });
}

/**
 * 下载视频
 */
function downliu(dir, links, callback) {
    console.log("发现%d张图片，准备开始下载...", links.length);
    //eachLimits 控制下载视频并行上限 第二个参数 options.downLimit 就是配置
    async.eachLimit(
        links,
        1,
        function (url, cb) {
            //获取url最后的名字
            var fileName = path.basename(url.title).replace(/&nbsp;/g, "");
            //去掉/
            var toPath = path.join(options.dirfile + dir, fileName);
            console.log("开始下载视频：%s，保存到：%s", fileName, dir);
            //这个地方要详细说了
            request(encodeURI(url.url))
                .on("error", function (err) {
                    cb();
                })
                .pipe(fs.createWriteStream(toPath + ".mp4"))
                .on("finish", () => {
                    console.log("视频下载成功：%s", url.url);
                    cb();
                });
        },
        callback
    );
}
