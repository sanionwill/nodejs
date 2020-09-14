var cmdEnum = require("cmdEnum");
var BaseModel = {
  Header: "",
  Cmd: "",
  DataLen: 0,
  Data: null,
};

function GetModel(msg) {
  if (msg.length < 12) {
    console.log("invalided data");
    return null;
  }

  this.BaseModel.Header = msg.substr(0, 4);
  this.BaseModel.Cmd = msg.substr(4, 2);
  this.BaseModel.DataLen = msg.substr(6, 6);
  this.BaseModel.Data = msg.substr(12);

  return this.BaseModel;
}

function Response() {
  switch (this.BaseModel.Cmd) {
    case cmdEnum.TCPCmd.GetParams:
      return resModel.GetParams;
      break;
    case cmdEnum.TCPCmd.SetAuthority:
      return resModel.SetAuthority;
      break;
    default:
      break;
  }

  var resModel = {
    GetParams: {
      Cmd: cmdEnum.TCPCmd.GetParams,
      Data: {
        DevName: "设备名称",
        DevAddress: 1,
        DevPort: 19000,
        DevMacAddr: "ABCDEF",
        Threshold: 0.7,
        DoorPassword: "123456",
        DevPassword: 123456,
        DevVer: "版本号",
        Restart: 1,
        DevDate: "2018-9-20 13:01:01",
        DoorNo: "1",
        DoorIp: "192.168.11.123",
      },
    },
    SetAuthority: {
      Cmd: cmdEnum.TCPCmd.SetAuthority,
      Data: {
        Code: "0",
        CardId: "1",
        Feature: "Base64编码的二进制数据",
      },
    },
  };
}

module.exports = { GetModel };
