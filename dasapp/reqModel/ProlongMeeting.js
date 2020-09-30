const util = require("../util/util");

var obj = {
    MethodName: "ProlongMeeting",
    PhoneNO: "13249080243",
    SignString: "",
    TimeStamp: "",
    MeetingId: "1",
    PublicAuthorEnd: "2020-09-30 12:00:00",
    MeetingAuthorEnd: "2020-09-30 12:00:00",
    MeetingEnd:'2020-09-30 12:00:00'
};

var model = function (t) {
    obj = util.signedObj(obj, t.token);
    return obj;
};

module.exports = {
    model,
};
