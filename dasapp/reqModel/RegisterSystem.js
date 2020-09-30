const util = require("../util/util");

var obj = {
    MethodName: "RegisterSystem",
    PhoneNO: "13249080243",
    Token: "",
    SignString: "",
    TimeStamp: "",
};

var model = function (t) {
    obj.Token = t.rsaToken;
    obj = util.signedObj(obj, t.token);
    return obj;
};

module.exports = {
    model,
};
