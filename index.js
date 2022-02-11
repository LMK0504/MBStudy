//웹서버 구축하기
const { getCipherInfo } = require('crypto');
const http = require('http');  //require == import or include 랑 같은 의미 (가져오는거)

http.createServer((req, res) => {                   
  res.statusCode = 200;                         //정상응답
  res.setHeader('Content-Type', 'text/plain');  //이미지가 아니라 text형식
  res.end('Hello World');                       
}).listen(7777);                                //7777포트 
//createServer(자체 함수) req= request, res= respond
//http://localhost:7777 브라우저로 하면 나옴

//얕은 복사
const var1 = {a:10,b:20}
const var2 = var1;
console.log(var1===var2)

var2.a = 1234;
console.log(var1.a)

//깊은 복사
const var3 = {a:10,b:20}
const var4 = {...var3}
console.log(var3 ===var4)

var4.a =1234
console.log(var3.a)

//closure
fn {
    var a= 3
    return fn {
        return a
    }
}

fn {
    var a=3

    getFn() {
        return myFn() {
            a = a+1
        }
    }
}

var testfn = fn->getFn()