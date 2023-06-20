// break문 => 레이블문, 반복문, switch문 코드 블록 탈출

// 레이블 문
foo: {
    console.log(1);
    break foo;
    console.log(2);
}

console.log('Done!');


outer: for (var i = 0; i < 3; i++){
          for (var j = 0; j < 3; j++){
            if(i + j === 3) break outer;
          }
          console.log(`inner [${i}, ${j}]`);
}
// 레이블 문은 for문 밖으로 탈출할 때 유용
// but, 그 밖의 경우는 가독성과 오류 발생 가능성 때문에 사용을 권장하지 않는다.


var string = 'Hello World.';
var search = 'l';
var index;

for (var i = 0; i < string.length; i++){
    if(string[i] === search){
        index = i;
        // break; // 반복문 탈출 => 불필용한 루프 제거
    }
}

console.log(index,'index');