const { json } = require("express");

var GetModel = function () {
    // var Data = JSON.stringify({
    //     FeatureType: "2",
    //     MinPixel: "90",
    //     DevName: "达实双屏消费机1000210007",
    //     IsHigh: "1",
    //     ImageSize: "2",
    //     DoorPassword: "123456",
    //     IsAlive: "1",
    //     Restart: "2",
    //     DoorIp: "192.168.1.1",
    //     evMacAddr: "9CF049",
    //     DevPassword: "123456",
    //     Threshold: "0.8",
    //     DevVer: "Release2.4.1V14",
    //     QuailtyScore: "80",
    //     DevAddress: "20780131",
    //     DevDate: "2020-10-23 10:26:21",
    //     UdpPort: "19501",
    //     ServerIp: "172.168.120.228",
    //     DevType: "2",
    //     IsKqUse: "0",
    //     DevPort: "19000",
    //     DoorNo: "1",
    //     MaxPixel: "800",
    //     SimilarityScore: "77",
    //     ServerPort: "19000"
    // });
    var Data = JSON.stringify({
        FeatureType: "2",
        MinPixel: "90",
        DevName: "消费测试机S09",
        IsHigh: "1",
        ImageSize: "2",
        DoorPassword: "123456",
        IsAlive: "1",
        Restart: "2",
        DoorIp: "192.168.1.1",
        DevMacAddr: "9CF049",
        DevPassword: "123456",
        Threshold: "0.8",
        DevVer: "S1.1.1",
        QuailtyScore: "80",
        DevAddress: "99990001",
        DevDate: "2020-09-07 11:11:51",
        UdpPort: "19501",
        ServerIp: "172.168.120.76",
        DevType: "2",
        IsKqUse: "0",
        DevPort: "18000",
        DoorNo: "0",
        MaxPixel: "800",
        SimilarityScore: "77",
        ServerPort: "19000"
    });
    // Data = '{"FeatureType":"2","MinPixel":"90","DevName":"达实双屏消费机1000210007","IsHigh":"1","ImageSize":"2","DoorPassword":"123456","IsAlive":"1","Restart":"2","DoorIp":"192.168.1.1","DevMacAddr":"9CF049","DevPassword":"123456","Threshold":"0.8","DevVer":"Release2.4.1V14","QuailtyScore":"80","DevAddress":"20780131","DevDate":"2020-10-23 10:26:21","UdpPort":"19501","ServerIp":"172.168.120.76","DevType":"2","IsKqUse":"0","DevPort":"19000","DoorNo":"0","MaxPixel":"800","SimilarityScore":"77","ServerPort":"19000"}';
    var Data = JSON.stringify({
        FeatureType: "2",
        MinPixel: "90",
        DevName: "达实双屏消费机1000210007",
        IsHigh: "1",
        ImageSize: "2",
        DoorPassword: "123456",
        IsAlive: "1",
        Restart: "2",
        DoorIp: "192.168.1.1",
        DevMacAddr: "9CF049",
        DevPassword: "123456",
        Threshold: "0.8",
        DevVer: "Release2.4.1V14",
        QuailtyScore: "80",
        DevAddress: "20780131",
        DevDate: "2020-10-23 10:26:21",
        UdpPort: "19501",
        ServerIp: "172.168.120.76",
        DevType: "2",
        IsKqUse: "0",
        DevPort: "18000",
        DoorNo: "0",
        MaxPixel: "800",
        SimilarityScore: "77",
        ServerPort: "19000"
    });
    var DataLen = Data.length;

    return (
        "Back" +
        "01" +
        Buffer.from(Data).length.toString(16).padStart(6, "0") +
        Data
    );
};

module.exports = { GetModel };
