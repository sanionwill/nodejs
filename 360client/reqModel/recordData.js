var GetModel = function () {
    var Data = JSON.stringify({
        EmpId: 100,
        ControlDate: "2020-08-31 18:00:00",
        DoorNo: 1,
        DevAddress: "GFJH36",
        CtrlStatus: 1,
        RecordId: 1,
        ValidType: 1,
    });
    var DataLen = Data.length;
    return (
        "Back" +
        "04" +
        Buffer.from(Data).length.toString(16).padStart(6, "0") +
        Data
    );
};

module.exports = { GetModel };
