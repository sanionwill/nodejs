const util = require("../util/util");

var obj = {
    MethodName: "AddOrUpdateMeetingRoom",
    PhoneNO: "13249080243",
    SignString: "",
    TimeStamp: "",
    MeetingRoomId: "1",
    MeetingName: "集团会议室01",
    Floor: "1",
};

var model = function (t) {
    obj = util.signedObj(obj, t.token);
    return obj;
};

module.exports = {
    model,
};
