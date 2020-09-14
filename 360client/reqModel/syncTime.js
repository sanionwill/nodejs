var GetModel = function () {
  var Data = JSON.stringify({
    Code: 0,
  });
  var DataLen = Data.length;
  return "Back" + "09" + DataLen + Data;
};

module.exports = { GetModel };
