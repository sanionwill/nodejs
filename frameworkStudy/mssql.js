// npm install mssql --save
const sql = require("mssql");

//对于mssql，返回的result是一个对象，以showResult为例具体含义如下：
var showResult = {
    recordsets: [[[Object], [Object], [Object]]], //没看出与recordset的区别
    recordset: [
        {
            ParaId: 2, //这些都是每一行的每一列的key和value
            ParaName: "开放帐务分析",
            ParaValue: "0",
            ParaUsg: "0:不开放，1：开放",
        },
        {
            ParaId: 3,
            ParaName: "开放节能控制器按时段下权限费率",
            ParaValue: "0",
            ParaUsg: "0:不开放，1：开放",
        },
        {
            ParaId: 4,
            ParaName: "开放消费自定义统计功能",
            ParaValue: "0",
            ParaUsg: "0:不开放，1：开放",
        },
    ], //每一行数据的数组，相当于rows
    output: { ResCount: 3 }, //如果有定义返回参数，这里将体现为返回参数的集合对象
    rowsAffected: [3], //sql动作影响的行数，可能是返回数据集的行数，也可能是insert、update或delete执行的行数
};

//配置文档
var config = {
    user: "sa",
    password: "Das9999",
    server: "172.168.120.76\\sql2017",
    database: "M1200902",
    port: 1433,
    connectionTimeout: 15000,
    options: {
        encrypt: true,
    },
};

//查询数据-无参数，返回单行数据
var q10 = function () {
    sql.connect(config)
        .then(() => {
            return sql.query("select getdate() as time");
        })
        .then((result) => {
            console.log(result);
            result.recordset.forEach((record) => {
                console.log(record.time);
            });
        })
        .catch((err) => {
            console.log(err);
        });
};

//查询数据-拼接参数，返回多行数据
var q11 = function () {
    sql.connect(config)
        .then(() => {
            return sql.query("SELECT * FROM Pf_SysParam WHERE ParaId<" + 3);
        })
        .then((result) => {
            console.log(result);
            result.recordset.forEach((record) => {
                console.log(record.ParaName);
            });
        })
        .catch((err) => {
            console.log(err);
        });
};

//查询数据-输入参数，返回多行数据
var q12 = function () {
    sql.connect(config, (err) => {
        const request = new sql.Request();
        request.input("MinCount", sql.Int, 2);
        request.input("MaxCount", sql.Int, 4);
        request.query(
            "SELECT * FROM Pf_SysParam WHERE ParaId between @MinCount and @MaxCount",
            (err, result) => {
                console.log(result);

                console.log(result.output); //返回参数的集合：{ ResCount: 1 }
            }
        );
    });
};
q12();

//查询数据-返回数据量较大
var q13 = function () {
    sql.connect(config, (err) => {
        const request = new sql.Request();
        request.stream = true; //【以数据流形式返回结果】
        request.query("SELECT * FROM Pf_SysParam WHERE ParaId<" + 10);
        request.on("recordset", (columns) => {
            console.log(columns); //返回数据集的每列的详细信息，包括名称、数据类型、是否null等
        });
        request.on("row", (row) => {
            console.log(row); //每一行的数据对象
        });
        request.on("error", (err) => {
            console.log(columns);
        });
        request.on("done", (result) => {
            console.log(result); //返回受影响的行数：{ output: {}, rowsAffected: [ 2 ] }
        });
    });
    sql.on("error", (err) => {
        console.log(err);
    });
};

//数据连接池
var q2 = function () {
    new sql.ConnectionPool(config)
        .connect()
        .then((pool) => {
            return pool.query("SELECT * FROM Pf_SysParam WHERE ParaId<" + 3);
        })
        .then((result) => {
            console.log(result);
        })
        .catch((err) => {
            console.log(err);
        });
    pool.close();
};
//q2();

//存储过程：输入参数，返回参数和数据集
var q3 = function () {
    //创建存储过程
    // create PROCEDURE pro_1
    // 	@MaxCount int,
    // 	@ResCount int output
    // AS
    // BEGIN
    // 	SELECT @ResCount = COUNT(*) FROM Pf_SysParam WHERE ParaId<@MaxCount;
    // 	SELECT * FROM Pf_SysParam WHERE ParaId<@MaxCount;
    // END

    sql.connect(config, (err) => {
        const request = new sql.Request();
        request.input("MaxCount", sql.Int, 2);
        request.output("ResCount", sql.Int);
        request.execute("pro_1", (err, result) => {
            console.log(result);

            console.log(result.output); //返回参数的集合：{ ResCount: 1 }
        });
    });
};
// q3();
