var GetModel = function (data) {
  var obj = JSON.parse(data);
  var Data = JSON.stringify({
    Code: 0,
    EmpId: obj.EmpId,
    Feature: null,
  });
  var DataLen = Data.length;
  return "Back" + "02" + DataLen + Data;
};

module.exports = { GetModel };
