function TCPCmd() {
  return {
    HeartBeat: "00",
    GetParams: "01",
    SetAuthority: "02",
    UploadRecords: "04",
    RestartDevice: "06",
    GetFeature: "08",
    AdjustTime: "09",
    UpdateApp: "0A",
  };
}
function UDPCmd() {
  return {
    SearchDevice: "00",
    SetParams: "01",
  };
}

module.exports = { TCPCmd, UDPCmd };
