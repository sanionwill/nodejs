'use strict';

const path = require('path');
const grpc = require('grpc');//npm install grpc
const protoLoader = require('@grpc/proto-loader');//npm install @grpc/proto-loader

// 从 proto 文件加载服务描述符
const PROTO_PATH = path.resolve(__dirname, './protos/greet.proto');
const packageDefinition = protoLoader.loadSync(
  PROTO_PATH,
  {
      keepCase: true,
      longs: String,
      enums: String,
      defaults: true,
      oneofs: true
  }
);
const hello_proto = grpc.loadPackageDefinition(packageDefinition)
                        .greet;//这里是greet.prpto文件的package名称

//以上部分是固定配置-结束----------------------------------------------------------------------------

function deal_sayHello(call, callback) {
    try {
        console.log('请求参数：' + call.request.Name);
        let data = 'hello ' + call.request.Name;
        callback && callback(null, { Message: data });
    } catch (err) {
        console.log(err);
        callback && callback(err);
    }
}

//  服务器的启动方法
/*
    1、通过 Greeter 服务描述符创建一个 Server 构造函数。
    2、实现服务的方法。
    3、通过调用 Server 的构造函数以及方法实现去创建一个服务器的实例。
    4、用实例的 bind() 方法指定地址以及我们期望客户端请求监听的端口。
    5、调用实例的 start() 方法启动一个RPC服务器。
*/
function main() {
    const server = new grpc.Server();//实例化一个服务
    server.addService(//添加服务对象
        hello_proto.Greeter.service,//Greeter表示的是greet.proro文件里的service名称
        {
            SayHello: deal_sayHello  //客户端调用SayHello函数，对应的服务端处理函数是deal_sayHello
        });
    
    // server.bind(
    //     'localhost:50051',//服务开放访问地址，自定义
    //     grpc.ServerCredentials.createInsecure()
    // );
    server.bind(
        'localhost:50051',//服务开放访问地址，自定义
        grpc.ServerCredentials.createInsecure()
    );
    server.start();//启动服务
    console.log('server start......')    
}

main();