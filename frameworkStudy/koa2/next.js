//npm install koa2
var koa2 = require('koa2')
var app =new koa2()

//可以对同一个接口做多重处理
//【1】第1个执行的过程
app.use(async (ctx, next) => {
    // ctx.request.method=post或get
    // ctx.request.url=不包含ip和port的地址  

    const start = new Date().getTime() 

    console.log('1-start:'+new Date())  
    await next();//这里表示继续下一个use处理【2】
    console.log('1-end:'+new Date())
    
    const ms = new Date().getTime() - start;
    console.log('costTime=' + ms);
})

//这里承接上一个处理过程
//【2】第2个执行的过程
app.use(async (ctx, next) => {
    console.log('2-start:'+new Date())   
    await next();//这里调用下一个use处理函数【3】
    console.log('2-end:' + new Date())
})

//这里承接上一个处理过程
//【3】第3个执行的过程
app.use(async (ctx, next) => {
    console.log('3-start:'+new Date())
    await next();
    console.log('3-end:'+new Date())
    ctx.response.type = 'text/html'
    ctx.response.body='<h1>This is koa2</h1>'
})

//执行结果如下：
// 1-start:Fri Oct 16 2020 16:54:17 GMT+0800 (中国标准时间)
// 2-start:Fri Oct 16 2020 16:54:17 GMT+0800 (中国标准时间)
// 3-start:Fri Oct 16 2020 16:54:17 GMT+0800 (中国标准时间)
// 3-end:Fri Oct 16 2020 16:54:17 GMT+0800 (中国标准时间)
// 2-end:Fri Oct 16 2020 16:54:17 GMT+0800 (中国标准时间)
// 1-end:Fri Oct 16 2020 16:54:17 GMT+0800 (中国标准时间)
// costTime=17

// 注意点：
// a. koa把很多async函数组成一个处理链，每个async函数都可以做一些自己的事情，然后用await next()来调用下一个async函数。
// b. middleware的顺序很重要，也就是调用app.use()的顺序决定了middleware的顺序。
// c. 如果一个middleware没有调用await next(), 后续的middleware将不再执行。
//例如：一个检测用户权限的middleware可以决定是否继续处理请求，还是直接返回403错误
// app.use(async (ctx, next) => {
// if (await checkUserPermission(ctx)) {
//         await next();
//     } else {
//         ctx.response.status = 403;
//     }
// });

app.listen(1000)
console.log("Now is listening 1000");