const log = console.log;
const clear = console.clear;

// if...else
const num = 10;
const 조건식 = num > 5;
// const 조건식 = num < 7;

if(조건식) {
   log('조건식의 결과가 true');
} else {
   log('조건식의 결과가 false');
}


// if...else if...else
if(num < 10) {
    log('num < 10 조건식의 결과가 true');
} else if(num < 100) {
    log('num < 100 조건식의 결과가 true');
} else {
    log('조건 두개 모두 false');
}
// } else if(num === 10){
//     log('num === 10 조건식의 결과가 true');   // 가장 먼저 true가 되는 조건식의 블럭만 실행
// } 


// [예제 08-03]
var num2 = 2;
var kind;

// 이것과 
if(num2 > 0){
    kind = '양수';
} else if(num2 < 0){
    kind = '음수';
} else {
    kind = 0;
}

// 이것은 같다
if(num2 > 0) kind = '양수'; 
else if(num2 > 0) kind = '음수'; 
else kind = 0; 

log(kind);


// [예제 08-04]
var x = 2;
// var result;

// 이것과
if(x % 2){ 
    // 결과는 0 => false 암묵적 변환(falsy)
    // 결과가 1이면 => true(truthy)
    result = '홀수';
} else {
    result = '짝수';
}

// 이것은 같은 결과로 나온다
var result = x % 2 ? '홀수' : '짝수';

log(result);


// [예제 08-06] 
var num3 = 2;
var kind3 = num3 ? (num3 > 0 ? '양수' : '음수') : 0;
log(kind3)
// 가독성이 좋은가..? 개인적으로는 잘 모르겠음, 취향 차이일듯
// 단, 삼항연산자가 3중첩인 경우는 정말 복잡해져서 지양하는 게 좋을 거 같다


// => 개인이 가독성이 더 좋다고 생각하는 것을 쓰거나 팀 컨벤션에 맞추어 사용하자


