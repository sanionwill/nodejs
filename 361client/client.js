const http = require("http");
const moment = require("moment");

var getTime = () => {
    return moment().format("YYYY-MM-DD HH:mm:ss");
};

var options = function (path) {
    return {
        hostname: "localhost",
        port: 56672,
        path: "/ServerApi/" + path,
        method: "post",
        headers: {
            UserHostAddress: "172.168.120.24",
            UserAgent: "nodejs",
            UserHostName: "nodejs client",
            "Content-Type": "application/json",
        },
    };
};
var params = function (data) {
    return JSON.stringify({
        DeviceUniqueCode: "909090",
        TimeStamp: getTime(),
        Data: data,
    });
};
function doRequest(path, data) {
    var req = http.request(options(path), (res) => {
        var info = "";
        res.on("data", (chunk) => {
            info += chunk;
            //console.log(chunk);
        });
        res.on("end", (chunk) => {
            console.log("[RES][" + path + "][" + getTime() + "]" + info);
        });
    });

    req.on("error", (e) => {
        console.log(e);
    });
    var reqData = params(data);
    console.log("[REQ][" + path + "][" + getTime() + "]" + reqData);
    req.write(reqData);
    req.end();
}

var recyleRequest = setInterval(() => {
    console.log("new request");
    try {
        doRequest("DeviceHeartBeat", {
            AuthorityCount: 264,
            DevicePort: 8090,
            DeviceTime: getTime(),
            UnuploadRecordsCount: 130,
        });
        doRequest("NoticeOfDownloadAuthorityData", {
            IsReady: "Y",
        });
        doRequest("NoticeOfCardSystemInit", {
            IsCardSystemInit: "1",
        });
        doRequest("NoticeOfUpgradeApp", {
            AppVersion: "361.5.36",
        });
        doRequest("NoticeOfDeviceParamsUpdate", {
            BasicParams: {
                DeviceName: "测试设备beta2222",
                ServerIP: "172.0.0.1",
                ServerPort: 3000,
                IsAutoRestart: 0,
                DailyRestartTime: "02:00:00",
                QrCodeSwitch: 0,
                IsSupportCard: 0,
                MainUIType: 1,
                HeartBeatInterval: 10000,
            },
            RecognitionParams: {
                SimilityThreshold: "75",
                QualityThreshold: "80",
                MinFacePixel: 100,
                MaxFacePixel: 1000,
                IsAlive: 0,
                LivingThreshold: "99.999",
            },
            HardWareParams: {
                DebugModeSwitch: 0,
            },
        });
        doRequest("UploadRecords", {
            DeviceUniqueCode: "909090",
            RecordID: 10001,
            RecordTime: getTime(),
            ActionType: 2,
            DeviceType: 2,
            UniqueCode: "92350231",
            CapturePhoto:
                "data:image/jpg;base64,/9j/4AAQSkZJRgABAQEAYABgAAD/2wBDAAgGBgcGBQgHBwcJCQgKDBQNDAsLDBkSEw8UHRofHh0aHBwgJC4nICIsIxwcKDcpLDAxNDQ0Hyc5PTgyPC4zNDL/2wBDAQkJCQwLDBgNDRgyIRwhMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjL/wgARCAAaABoDASIAAhEBAxEB/8QAGAABAQEBAQAAAAAAAAAAAAAAAQACBAX/xAAVAQEBAAAAAAAAAAAAAAAAAAAAAv/aAAwDAQACEAMQAAABxVINAvB6AVk//8QAGRAAAQUAAAAAAAAAAAAAAAAAAQIQITAx/9oACAEBAAEFArFQRjf/xAAUEQEAAAAAAAAAAAAAAAAAAAAg/9oACAEDAQE/AR//xAAUEQEAAAAAAAAAAAAAAAAAAAAg/9oACAECAQE/AR//xAAYEAACAwAAAAAAAAAAAAAAAAAAIQEQMP/aAAgBAQAGPwLRIi//xAAaEAADAAMBAAAAAAAAAAAAAAAAAREQIEFx/9oACAEBAAE/IcQmkLo7XT8YT4Vn/9oADAMBAAIAAwAAABAoyTz/xAAUEQEAAAAAAAAAAAAAAAAAAAAg/9oACAEDAQE/EB//xAAUEQEAAAAAAAAAAAAAAAAAAAAg/9oACAECAQE/EB//xAAdEAEAAgICAwAAAAAAAAAAAAABABEhYRAxQZGh/9oACAEBAAE/EFvE+xCZJTcrEqVwLGETSM78cVB8henUIolqZjppibH3P//Z",
            SimilarityScore: "75.68",
            SimilarityThreshold: "75.00",
            QualityScore: "83.59",
            QualityThreshold: "80.00",
            IsAlive: "Y",
            AccessDoorID: 1,
            AccessCode: "100",
            AccessResult: "开门成功",
            IDType: 1,
            IDNo: "",
            CardNo: "135214665",
        });
    } catch (e) {
        console.log("exception" + JSON.stringify(e));
    }
}, 5000);

console.log("start");
