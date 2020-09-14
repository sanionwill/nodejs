var GetModel = function () {
  var Data = JSON.stringify({});
  var DataLen = Data.length;
  return "Back" + "06" + DataLen + Data;
};

module.exports = { GetModel };
