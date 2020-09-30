const util = require("../util/util");

var obj = {
    MethodName: "AddMeetingPerson",
    PhoneNO: "13249080243",
    SignString: "",
    TimeStamp: "",
    MeetingId: "2",
    PersonPhone: "13200001111",
};

var model = function (t) {
    obj = util.signedObj(obj, t.token);
    return obj;
};

module.exports = {
    model,
};
