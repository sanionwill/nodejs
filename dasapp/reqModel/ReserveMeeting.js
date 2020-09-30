const util = require("../util/util");

var obj = {
    MethodName: "ReserveMeeting",
    PhoneNO: "13249080243",
    SignString: "",
    TimeStamp: "",

    MeetingId: "2",
    ReservePerson: "张三",
    Linkman: "张三",
    ReservePersonPhone: "13249080243",
    Remark: "自带水杯",
    Topic: "迎国庆研发总结大会(下午)",
    Start: "2020-09-30 15:30:00",
    End: "2020-09-30 17:30:00",
    AuthorStart: "2020-09-30 15:30:00",
    AuthorEnd: "2020-09-30 17:30:00",
    PubilcStart: "2020-09-30 15:30:00",
    PublicEnd: "2020-09-30 17:30:00",
    MeetingType: "0",
    MeetingRoomId: "1",
};

var model = function (t) {
    obj = util.signedObj(obj, t.token);
    return obj;
};

module.exports = {
    model,
};
