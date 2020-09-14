var CmdEnum = require("CmdEnum");

var Header = "Back";
var Cmd = CmdEnum.Cmd_TCP().HeartBeat;

var BaseModel = {
  Header: Header,
  Cmd: Cmd,
  DataLen: 0,
  Data: null,
};

function GetModel() {
  if (msg.length < 12) {
    console.log("invalided data");
    return this.BaseModel;
  }

  this.BaseModel.Header = msg.substr(0, 4);
  this.BaseModel.Header = msg.substr(4, 2);
  this.BaseModel.Data = msg.substr(10);

  return this.BaseModel;
}

module.exports = { GetModel };
