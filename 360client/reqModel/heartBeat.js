var GetModel = function () {
  var Data = JSON.stringify({
    Date: "2020-08-31 16:30:00",
  });
  var DataLen = Data.length;
  return "Back" + "00" + DataLen + Data;
};

module.exports = { GetModel };
