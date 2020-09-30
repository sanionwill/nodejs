const util = require("../util/util");

var obj = {
    MethodName: "EmpExistsPhoto",
    PhoneNO: "13249080243",
    SignString: "",
    TimeStamp: "",
};

var model = function (t) {
    obj = util.signedObj(obj, t.token);
    return obj;
};

module.exports = {
    model,
};
