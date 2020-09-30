var GetModel = function () {
    var Data = JSON.stringify({});
    var DataLen = Data.length;
    return (
        "Back" +
        "06" +
        Buffer.from(Data).length.toString(16).padStart(6, "0") +
        Data
    );
};

module.exports = { GetModel };
