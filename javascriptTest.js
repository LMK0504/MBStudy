let start = new Date()
    console.log(start)
function sayHi() {   // (1) 함수 생성
    console.log( "Hello" );
    console.log("Hi");
  }
  
  let func = sayHi;    // (2) 함수 복사  let (같은 타입만 지정할수있다.)

  func(); // Hello     // (3) 복사한 함수를 실행(정상적으로 실행됩니다)!
  sayHi(); // Hello    //     본래 함수도 정상적으로 실행됩니다.

 
let sum = (a, b) => {  // 중괄호는 본문 여러 줄로 구성되어 있음을 알려줍니다.
    let result = a + b;
    return result; // 중괄호를 사용했다면, return 지시자로 결괏값을 반환해주어야 합니다.
  };
  
  console.log( sum(1, 2) ); // 3

  let map = new Map();
 
  map.set('1', 'str1');   // 문자형 키
  map.set(1, 'num1');     // 숫자형 키
  map.set(true, 'bool1'); // 불린형 키
   
  // 객체는 키를 문자형으로 변환한다는 걸 기억하고 계신가요?
  // 맵은 키의 타입을 변환시키지 않고 그대로 유지합니다. 따라서 아래의 코드는 출력되는 값이 다릅니다.
  console.log( map.get(1)   ); // 'num1'
  console.log( map.get('1') ); // 'str1'
   
  console.log( map.size ); // 3

let now = new Date() //현재 날짜 및 시간이 출력
  console.log(now)  

let end = new Date() //측정 종료
console.log (`반복문을 모두 도는데  ${end - start} 밀리초가 걸렸습니다.`);

function pow(x, n) {
    if (n == 1) {
      return x;
    } else {
      return x * pow(x, n - 1);
    }
  }
  
  console.log( pow(2, 3) ); // 8