var count = 0;

// ~하는 동안에 영어 뜻 그대로 
// while(count < 3){ // count가 3 미만인 동안 블록문 반복 실행
//     console.log(count);
//     count++;
// }


// for문은 반복횟수가 명확하거나 컨트롤 해야할 때 주로 사용
// while문은 반복횟수가 명확하지 않을 때 유용


do{
    count++;
    console.log(count, '블록문을 먼저 실행');
    console.log('그리고 조건식 평가');
} while(count < 3);

// 용도가 있을 거 같지만, 실무에서 한 번도 써본 적은 없다