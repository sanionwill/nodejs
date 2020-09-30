var GetModel = function (data) {
    var obj = JSON.parse(data);
    var Data = JSON.stringify({
        Code: 0,
        EmpId: obj.EmpId,
        CardId: obj.CardId,
        Feature: null,
    });
    var DataLen = Data.length;
    return (
        "Back" +
        "02" +
        Buffer.from(Data).length.toString(16).padStart(6, "0") +
        Data
    );
};

module.exports = { GetModel };
