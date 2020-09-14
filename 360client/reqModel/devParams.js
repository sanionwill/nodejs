var GetModel = function () {
  var Data = JSON.stringify({
    FeatureType: '2',
    MinPixel: '90',
    DevName: '达实双屏消费机10001',
    IsHigh: '1',
    ImageSize: '2',
    DoorPassword: '123456',
    IsAlive: '2',
    Restart: '2',
    DoorIp: '192.168.1.1',
    DevMacAddr: '44AB02',
    DevPassword: '123456',
    Threshold: '0.8',
    DevVer: 'Debug2.3.2V12',
    QuailtyScore: '80',
    DevAddress: '10674691',
    DevDate: '2020-09-01 11:11:51',
    UdpPort: '19501',
    ServerIp: '172.168.120.76',
    DevType: '2',
    IsKqUse: '0',
    DevPort: '19000',
    DoorNo: '1',
    MaxPixel: '800',
    SimilarityScore: '77',
    ServerPort: '19000',
  })
  var DataLen = Data.length
  return 'Back' + '01' + DataLen + Data
}

module.exports = { GetModel }
