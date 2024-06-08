/* -------------------------------------------- */
/*                  Legacy var                  */
/* -------------------------------------------- */

// var로 선언한 변수의 스코프는 함수 스코프이거나 전역 스코프입니다.
// 블록 기준으로 스코프가 생기지 않기 때문에 블록 밖에서 접근 가능합니다.
/* 
{
  let outside = 'outer';
  console.log(outside);
} */
// console.log(outside);
// // var는 변수의 중복 선언을 허용합니다{#ff0}
// var a = 10;
// var a = 20;

// console.log(a);

// // 선언하기 전 사용할 수 있는 var

// console.log(c);
// var c = 123456;
const person = {};

Object.defineProperty(person, 'firstName', {
  value: 'Yunseon',
  writable: true,
  enumerable: true,
  configurable: true,
});

Object.defineProperty(person, 'lastName', {
  value: 'Park',
  writable: true,
  enumerable: true,
  configurable: true,
});

let descriptor = Object.getOwnPropertyDescriptor(person, 'firstName');
console.log('firstName', descriptor);
/* firstName {
  value: 'Yunseon',
  writable: true,
  enumerable: true,
  configurable: true
} */

descriptor = Object.getOwnPropertyDescriptor(person, 'lastName');
console.log('lastName', descriptor);
/* lastName {
  value: 'Park',
  writable: false,
  enumerable: false,
  configurable: false
} */

console.log(Object.keys(person));
// ['firstName'];

person.lastName = 'Kim';
delete person.lastName;

descriptor = Object.getOwnPropertyDescriptor(person, 'lastName');
console.log('lastName', descriptor);
/* lastName {
  value: 'Park',
  writable: false,
  enumerable: false,
  configurable: false
} */

Object.defineProperty(person, 'fullName', {
  get() {
    return `${this.firstName} ${this.lastName}`;
  },

  set(name) {
    [this.firstName, this.lastName] = name.split(' ');
  },
  enumerable: false,
  configurable: true,
});

descriptor = Object.getOwnPropertyDescriptor(person, 'fullName');
console.log('fullName', descriptor);
/* fullName {
  get: [Function: get],
  set: [Function: set],
  enumerable: true,
  configurable: true
} */

person.fullName = 'Heegun Lee';
console.log(person);
/* { firstName: 'Heegun', fullName: [Getter/Setter] } */
console.log(person.fullName);
/* Heegun Park */
