var GetModel = function () {
    var Data = JSON.stringify({
        FeatureType: "2",
        MinPixel: "90",
        DevName: "消费测试机S01",
        IsHigh: "1",
        ImageSize: "2",
        DoorPassword: "123456",
        IsAlive: "2",
        Restart: "2",
        DoorIp: "192.168.1.1",
        DevMacAddr: "100001",
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
        ServerPort: "19000",
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
