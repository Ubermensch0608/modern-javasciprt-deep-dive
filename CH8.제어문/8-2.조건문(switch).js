const log = console.log;
// if...else 문은 논리적 참, 거짓으로 실행할 코드 블록을 결정할 때,
// switch 문은 다양한 상황(case)에 따라 실행할 코드 블록이 있을 떄

// [예제 08-07]
// 월을 영어로 반환
var month = 11;
var monthName;

switch (month){
    case 1: monthName = 'January' 
        // break;
    case 2: monthName = 'February';
        // break;
    case 3: monthName = 'March';
        // break;
    case 4: monthName = 'April';
        // break;
    case 5: monthName = 'May';
        // break;
    case 6: monthName = 'June';
        // break;
    case 7: monthName = 'July';
        // break;
    case 8: monthName = 'August';
        // break;
    case 9: monthName = 'September';
        // break;
    case 10: monthName = 'October';
        // break;
    case 11: monthName = 'November';
        // break;
    case 12: monthName = 'December';
        // break;
    default: monthName = 'Invalid Month';
}

// 폴 스루(fall trough) => break문 잘 사용
log(monthName);

// [예제 08-09]
var year = 2024; // 2000년은 윤년으로 2월이 29일이다.
var month = 2;
var days = 0;

switch (month){
    case 1: case 3: case 5: case 7: case 8: case 10: case 12:
        days = 31;
        break;
    case 4: case 6: case 9: case 11:
        days = 30;
        break;
    case 2:
        days = ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) ? 29 : 28;
        break;
    default:
        console.log('Invalidate Month');
}

console.log(days);

const score = 100;
let grade;

switch (true){
    case score >= 60:
        grade = 'A';
        break;
    case score >= 40:
        grade = 'B';
        break;
    case score >= 20:
        grade = 'C';
        break;
    case score >= 0:
        grade = 'D';
        break;
    default:
        grade = 'F';
}

console.log(grade);