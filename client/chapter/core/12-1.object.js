/* --------- */
/* Object    */
/* --------- */

/* global isObject */

const html = /* html */ `
  <h1>title</h1>
  <div class="first">
    hello
  </div>
`;

/* Primitives vs. Object --------- */

// key:value 쌍으로 구성된 엔티티(entity) 데이터 구조
let cssCode = /* css */ `
  .dialog {
    position: fixed;
    z-index: 10000;
    top: 50%;
    left: 50%;
    width: 60vw;
    max-width: 800px;
    height: 40vh;
    min-height: 280px;
    transform: translate(-50%, -50%);
  }
`;

// 위 CSS 스타일 코드를 JavaScript 객체로 작성해봅니다.
let cssMap = {
  position: 'fixed',
  zIndex: 10000,
  top: '50%',
  left: '50%',
  width: '60vw',
  maxWidth: '800px',
  height: '40vh',
  minHeight: '280px',
  transform: 'translate(-50%, -50%)',
};

// 인증 사용자 정보를 객체로 구성해봅니다.
// 인증 사용자(authentication user)
// - 이름
// - 이메일
// - 로그인 여부
// - 유료 사용자 권한

let authUser = null;

authUser = {
  uid: 'user-id-pus1072',
  name: '박윤선',
  email: 'pus9717@gmail.com',
  isSignIn: false,
  permission: 'paid',
};

// 점(.) 표기법
// authUser 객체의 프로퍼티에 접근해 Console에 출력해봅니다.

// getter: 값을 가져옴
console.log(authUser.uid);
console.log(authUser.name);
console.log(authUser.email);
console.log(authUser.isSignIn);
// setter: 값을 사용
console.log((authUser.permission = 'free'));

console.log('--------------<대괄호 표기법>------------------');
// 대괄호([]) 표기법
// 유료 사용자 권한(paid User Rights) 이름으로 프로퍼티를 재정의하고
// 대괄호 표기법을 사용해 접근 Console에 출력해봅니다.

// getter
console.log(authUser['uid']);
console.log(authUser['name']);
console.log(authUser['email']);
console.log(authUser['isSignIn']);
//setter
console.log((authUser['permission'] = 'allPass'));

Object.prototype.nickName = '호랑이';

// 객체 안에 키가 있는지 확인하는 방법

// in 문

console.log('uid' in authUser);

for (let key in authUser) {
  if ({}.hasOwnProperty.call(authUser, key)) {
    console.log(authUser[key]);
  }
}

// 객체의 key 만을 모아서 배열을 반환하는 메서드 Object.keys
const keyList = Object.keys(authUser);

console.log(keyList);

const valueList = Object.values(authUser);
console.log(valueList);

function getPropertiesList(obj) {
  let result = [];

  for (let key in obj) {
    if ({}.hasOwnProperty.call(obj, key)) {
      result.push(key);
    }
  }
  return result;
}

console.log(getPropertiesList(authUser));

console.clear();

// 프로퍼티 제거(remove) or 삭제(delete)
// 제거: 비워두는 것, 키는 남겨두고 값만 삭제
// 삭제: 메모리까지 날림

function removeProperty(obj, key) {
  if (isEmptyObject(obj)) {
    obj[key] = null;
  }
}
console.log(removeProperty(authUser, 'name'));

function deleteProperty(obj, key) {
  if (isEmptyObject(obj)) {
    delete obj[key];
  }
}
console.log(deleteProperty(authUser, 'name'));



// 계산된 프로퍼티 (computed property)
let calculateProperty = 'tel'; // phone | tel

function createUser(name, age, phone) {
  return {
    name: name,
    age: age,
    [calculateProperty]: phone,
  };
}



// 프로퍼티 포함 여부 확인

// 프로퍼티 나열

// 프로퍼티 제거 or 삭제

// authentication: 인증




// 단축 프로퍼티
let name = '선범';
let email = 'seonbeom2@euid.dev';
let authorization = 'Lv. 99';
let isLogin = true;

const student = {
  name,
  email,
  authorization,
  isLogin,
};

// 프로퍼티 이름 제한
// 예약어: class, if, switch, for, while, ...

// 객체가 프로퍼티를 포함하는 지 유무를 반환하는 유틸리티 함수 isEmptyObject 작성
function isEmptyObject(obj) {
  return Object.keys(obj).length === 0; // Boolean
}

const a = {};
isEmptyObject(student); // false





// 두 가지 구조 분해 핟당
/* ------------------------------------------- */
/* 배열 구조 분해 할당  destructuring assignments   */
/* ------------------------------------------- */

const arr = [10, 100, 1000, 10_000];

// 일일이 뽑아서 할당 X -> 구조분해 할당하자!
// const a0 = arr[0];
// const a1 = arr[1];
// const a2 = arr[2];
// const a3 = arr[3];

// 배열의 구조분해 할당을 해보자
// - length가 같지 않아도 됨
// - 건너뛰고 싶으면 비워두면 됨
// - 순서를 바꿀 수 없음(order): 변수명을 마음대로 지정가능
// - ...rest로 레스트 파라미터로 사용하면 나머지는 배열이됨
const [a0, ...rest] = arr;

for (let [key, value] of Object.entries(authUser)) {
  // console.log(key);
  // console.log(value);
}

// 유사배열에서도 배열의 구조분해할당 가능
// NodeList -> 유사배열
const spanList = document.querySelectorAll('span');
// const first = spanList[0];
// const second = spanList[1];

// 위의 코드를 구조분해 할당으로
const [first, second] = document.querySelectorAll('span');

/* -------------------------------------------- */
/* 객체 구조 분해 할당  destructuring assignments    */
/* --------------------------------------------- */

const salaries = {
  함정민: 95,
  지유진: 110,
  이진용: 15,
  한상학: 300,
};

// 배열은 순서(order) 상관 X
// 키와 변수명이 동일해야함
// 변수명 바꾼는 것이 가능 키:변수명, 대신 이렇게 할당하면 key로 찾을 수는 없음
// 구조분해 할당시 객체에 할당되어있지 않은 변수여도 기본값 설정이 가능함 ex) 장주원 = 500

const { 지유진: 지, 함정민, 이진용, 한상학: 한, 장주원: 장 = 500 } = salaries;

function createUserObject(
  { name: n, age, gender, job = '홈프로텍터', ...rest } = { //객체 구조분해할당
    name: '박윤선',
    age: 26,
    gender: 'female',
    job: 'developer',
    address: '인천시 남동구',
    tel: '010-2955-4941',
  }
) {
  // 아무 객체도 받아오지 못하면 default로 빈객체 가져오기
  return {
    name: n, // rename아니고 shortcut
    age,
    gender,
    job,
  };
}

// const person = createUserObject({
//   name: '박윤선',
//   age: 26,
//   gender: 'female',
//   job: 'developer',
//   address: '인천시 남동구',
//   tel: '010-2955-4941',
// });

console.log(지);
console.log(장);
