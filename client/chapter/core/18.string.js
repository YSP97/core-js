/* -------------------- */
/* String Type          */
/* -------------------- */

let message = 'Less is more.';

// length 프로퍼티
let stringTotalLength = message.length;
console.log('length:', stringTotalLength);

// 특정 인덱스의 글자 추출
let extractCharacter = message[5];
console.log('특정 인덱스 글자 추출:', extractCharacter);

// 문자열 중간 글자를 바꾸는 건 불가능 -> message[0] = 'P' 불가능
// (기존 문자 변경 대신, 새로운 문자를 생성해야 함)
let immutableChangeCharacter = 'P' + message.slice(1);
console.log('문자 중간 바꾸기:', immutableChangeCharacter);

// enumerable: 열거 가능한
// iterable: 반복 가능한
// immutable: 불변의
// mutable: 변경 가능한
// mutant: 돌연변이

// 부분 문자열 추출
let slice = message.slice(4, -1);
console.log('message:', message);
console.log('slice(4,-1):', slice);

let subString = message.substring(2, 5);
console.log('substring(2,5):', subString);
// let subStr = message.subStr();

// 문자열 포함 여부 확인
let indexOf = message.indexOf('is');
console.log('indexOf:', indexOf); // 없으면 음수를 반환 있으면 몇번째에 있는지 반환

// 브라우저 체크 함수

function checkBrowser() {
  const agent = window.navigator.userAgent.toLowerCase();
  let browserName;

  switch (true) {
    case agent.indexOf('edg') > -1:
      browserName = 'MS Edge';
      break;
    case agent.indexOf('chrome') > -1 && !!window.chrome: // !!: 암묵적 불리업 타입 변환
      browserName = 'Chrome';
      break;
    case agent.indexOf('firefox') > -1:
      browserName = 'Firefox';
      break;
    case agent.indexOf('safari') > -1:
      browserName = 'Safari';
      break;
    case agent.indexOf('trident') > -1:
      browserName = 'IE';
      break;
    default:
      browserName = '이게 무슨 브라우저임';
  }

  return browserName;
}

checkBrowser(); // chrome

/* 'edge' || 'edg' 
'chrome'
'firefox'
'trident'
'safari' */

console.log(checkBrowser('edg'));

let lastIndexOf = message.lastIndexOf('s');
console.log('lastIndexOf:', lastIndexOf);
// 뒤에서부터 찾지만 대상은 앞 인덱스부터 반환

let includes = message.includes('Less');
console.log('includes:', includes);

// 해당문자부터 시작 or 끝나는 지
let startsWith = message.startsWith('less');
console.log('startsWith:', startsWith);
let endsWith = message.endsWith('more.');
console.log('endsWith:', endsWith);

let str = '           a                  b c             d                 ';
// 공백 잘라내기
// 왼쪽 공백 제거
let trimLeft = str.trimStart();
console.log('trimLeft:', trimLeft);
// 오른쪽 공백 제거
let trimRight = str.trimEnd();
console.log('trimRight:', trimRight);
// 양쪽 공백 제거
let trim = str.trim();
console.log('trim:', trim);

// 중간 공백 제거 방법
// 1. replaceAll(좌변, 우변): 좌변 값을 우변값을 대체
const replaceAll = str.replaceAll(' ', '');
console.log('replaceAll:', replaceAll);

// 2. 정규표현식 사용
const replace = str.replace(/\s*/g, '');
console.log('replace:', replace);

// 공백제거 함수
const trimText = (text) => text.replace(/\s*/g, '');

console.log('trimTextFunc:', trimText(str));

// 텍스트 반복
let repeat = message.repeat(3);
console.log('repeat:', repeat);

// 대소문자 변환
let toLowerCase = message.toLowerCase();
console.log('toLowerCase:', toLowerCase);
let toUpperCase = message.toUpperCase();
console.log('toUpperCase:', toUpperCase);

// 텍스트 이름 변환 유틸리티 함수
function toCamelCase(string) {
  return string.replace(
    /(\s|-|_)+./g,
    (
      $1 // ' ' 혹은 '-', '_' 뒤에 오는 문자 하나씩 선택하여 콜백함수의 반환값으로 대체
    ) =>
      $1
        .trim() // 앞뒤 공백 제거
        .replace(/(-|_)+/, '') // '-' or '_'를 제거
        .toUpperCase() // 대문자로 변경
  );
}

console.log('toCamelCase:', toCamelCase('hello-My_name is Yoon'));

// pascalcase는 camelcase에서 첫번째 문자만 대문자이므로
function toPascalCase(string) {
  let name = toCamelCase(string);
  return name[0].toUpperCase() + name.slice(1);
}
