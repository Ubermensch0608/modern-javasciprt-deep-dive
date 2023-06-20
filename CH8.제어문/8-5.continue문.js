/**
 * continue문
 * - 반복문의 코드 블록 실행을 현 시점에서 중단
 * - 반복문의 증감식으로 실행 흐름을 이동
 * - break문 처럼 반복문을 탈출하지는 않는다
 *  */ 
var string = 'Hello World.';
var search = 'l';
var count = 0;

for (var i = 0; i < string.length; i++){
    if(string[i] !== search) continue; // string[i]이 'l'이 아니라면 증감식으로
    count++;
}

console.log(count);  // 3 => 'l'이 3개 이기 때문에 continue문을 거치지 않고, count++  

const regExp = new RegExp(search, 'g');
console.log(regExp,'regExp');
console.log(string.match(regExp).length);


// [예제 08-24]
for (var i = 0; i < string.length; i++){
    if(string[i] === search) count++; // string[i]이 'l'이라면 count 증가
} 
// => 이런 경우는 if 블럭문이 생략될 수 있고, 가독성이 나쁘지 않음


// [예제 08-25]
for(var i = 0; i < string.length; i++){
    if(string[i] === search){
        count++;
        console.log(count);
        console.log(string[i]);
        // extra code
    } // => continue 문 사용하지 않을 시, if문 안에 코드 작성
}

for (var i = 0; i < string.length; i++) {
    if(string[i] !== search) continue;

    count++;
    console.log(count);
    console.log(string[i]);
    // extra code
} // => if문 밖에 코드 작성 가능, 문 안에 실행 코드가 종속되지 않아 다루기 더 편할듯

