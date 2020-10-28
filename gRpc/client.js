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

function main() {
    console.log('client start.......')
    // 调用 Greeter 的存根构造函数，指定服务器地址和端口。
    const client = new hello_proto
        .Greeter(  //Greeter是greet.proto的service名称
            '127.0.0.1:5000',//gRPC服务地址
            grpc.credentials.createInsecure()
        );

    // 构造调用服务的方法：使用事件或者回调函数去获得结果
    function showMsg(error, response) {
        if (error) {
            console.log(error);
            return;
        }
        console.log(response);
        console.log('Greeting: ', response.Message)
    }
    // 调用存根上的方法，传入请求和回调函数
    client.SayHello({
        Name: 'Mike'
    }, showMsg);
}

main()