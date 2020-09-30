var GetModel = function (data) {
    var obj = JSON.parse(data);
    var Data = JSON.stringify({
        Code: 0,
        Feature: "AFDGCHBJNKM<L>LKJHGFDERYGHJKCNSAVCSAFYGAFUGOASUIFOI",
        ImgCode: obj.ImgCode,
    });
    var DataLen = Data.length;
    return (
        "Back" +
        "08" +
        Buffer.from(Data).length.toString(16).padStart(6, "0") +
        Data
    );
};

module.exports = { GetModel };
