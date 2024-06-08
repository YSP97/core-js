/* ----------------------- */
/* Functions → Expression  */
/* ----------------------- */

function calcTotal(moneyA, moneyB, moneyC, moneyD) {
  return moneyA + moneyB + moneyC + moneyD;
}

const resultX = calcTotal(10000, 8900, 1360, 2100);
const resultY = calcTotal(21500, 3200, 9800, 4700);
const resultZ = calcTotal(9000, -2500, 5000, 11900);

// console.log(resultX);
// console.log(resultY);
// console.log(resultZ);

// 함수 선언 → 일반 함수 (표현)식
let calculateTotal = function (a, b, c, d, e) {
  // 함수 안에서만 접근 가능한 인수들의 집합 객체로서 배열과 유사하여 arguments라고 불리는 변수
  let sum = 0;
  // 일반 for 문을 이용한 합계산
  /* for (let i = 0; i < arguments.length; i++) {
    sum += arguments[i];
  } */

  // for ... of를 이용한 합계산
  /* for (let value of arguments) {
    sum += value;
  } */

  // arguments를 배열로 만들자!
  //유사배열을 배열로 만드는 방법
  // 1.
  // const arr = Array.from(arguments);
  // 2.
  // const arr = Array.prototype.slice.call(arguments);

  // forEach를 이용한 순회 -> 합계산
  /* [...arguments].forEach(function (price) {
    sum += price;
  }); */
  // arrow function으로 forEach 사용
  // [...arguments].forEach((price) => (total += price));

  // reduce를 이용한 합계산{#ff9a2e}
  // const result = [...arguments].reduce(function (acc, cur) {
  //   return acc + cur;
  // }, 0);

  // arrow function으로 reduce 사용{#ff9a2e}
  // const result = arr.reduce((acc, cur) => acc + cur, 0);

  // 빌려쓰기
  // Array.prototype.forEach.call(arguments, function (item) {
  //   total += item;
  // });

  // 태생을 배열로 바꾸기{#74df00}
  // arguments.__proto__ = Array.prototype;
  // console.log(arguments);

  return sum;
};

const result = calculateTotal(1000, 5000, 2500, 4000, 5000, 4000);
// console.log(result);

// forEach => 배열 순환 값을 반환하지 않음              {#f2e2e2}
// reduce => 배열순환 값을 반환 O 숫자/문자/배열/객체
// map => 배열 순환 값을 반환 O only 배열만 반환
// filter => 배열 순환 값을 반환 O only 배열

const arr = ['안녕', '나는', '박윤선'];

// map은 배열을 만들어 줌                                    {#fe2ef7}
// item 하나씩 순회하면서 무언갈 추가하고 싶다면 map을 사용하자!
// map은 원본을 훼손하지 않는다!
const mapValue = arr.map(function (item, index) {
  return '멋쟁이-' + item;
});
console.log(mapValue);

// 익명(이름이 없는) 함수 (표현)식
let anonymousFunctionExpression = function () {};

// 유명(이름을 가진) 함수 (표현)식
let namedFunctionExpression = function namedFunction() {};

// 콜백 함수 (표현)식
let cb = function (isActive, success, fail) {
  if (isActive) {
    success(); // 콜백함수
  } else {
    fail(); // 콜백함수
  }
};

cb(
  false,
  function () {
    console.log('성공입니다.');
  },
  function () {
    console.log('실패입니다.');
  }
);

function movePage(url, success, fail) {
  if (url.includes('https')) {
    success(url); // arguments 전달
  } else {
    fail();
  }
}

movePage(
  'https://www.naver.com',
  function (url) {
    //매개변수가 arguments 전달받음

    console.log(url);
    console.log(`현재 입력하신 url은 ${url}입니다. 3초 뒤 해당 사이트로 이동`);
  },
  function () {
    '잘못된 url을 입력했습니다.';
  }
);

// higher-order function 고차함수{#f7fe2e}
// 함수를 인수로 받아 처리힘

function map(arr, func) {
  let result = [];

  for (let i = 0; i < arr.length; i++) {
    result.push(func(arr[i]));
  }

  return result;
}

function greater(n) {
  return function (m) {
    return n > m;
  };
}
// arrow 함수 사용하여 단축한 것
const g = (n) => (m) => n > m;

// 함수 선언문 vs. 함수 (표현)식

// 즉시 실행 함수 (표현)식
// Immediately Invoked Function Expression
let IIFE;

const people = [
  {
    nickName: 'tiger',
    age: 40,
  },
  {
    nickName: 'beom',
    age: 45,
  },
  {
    nickName: 'seon',
    age: 20,
  },
];

const template = people.reduce(function (htmlCode, cur) {
  return htmlCode + `<div>${cur.nickName} : ${cur.age}</div>`;
}, '');

// document.body.insertAdjacentHTML('beforeend',template)
