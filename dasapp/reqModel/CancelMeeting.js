const util = require("../util/util");

var obj = {
    MethodName: "CancelMeeting",
    PhoneNO: "13249080243",
    SignString: "",
    TimeStamp: "",
    MeetingId: "2",
};

var model = function (t) {
    obj = util.signedObj(obj, t.token);
    return obj;
};

module.exports = {
    model,
};
