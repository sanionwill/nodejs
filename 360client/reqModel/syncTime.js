var GetModel = function () {
    var Data = JSON.stringify({
        Code: 0,
    });
    var DataLen = Data.length;
    return (
        "Back" +
        "09" +
        Buffer.from(Data).length.toString(16).padStart(6, "0") +
        Data
    );
};

module.exports = { GetModel };
