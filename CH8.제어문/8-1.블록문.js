// 블록문 단독으론 거의 사용하지 않음

{
  var a = 1
  let b = 2
  const c = 3
}

// console.log(a) // 1
// console.log(b) // ReferenceError: b is not defined
// console.log(c) // ReferenceError: c is not defined


// 제어문
var x = 1;
if(x < 10){
  x++; 
}
// console.log(x); // 2


// 함수 선언문
function sum(a, b){
  return a + b;
}

// console.log(sum(100, 10)); // 110
