/* ---------------------------------------- */
/* Strict Mode                              */
/* ---------------------------------------- */

// 엄격 모드를 사용한 코드와 그렇지 않은 코드를 비교해봅니다.

/* 'use strict';
  const jujeob = '심선범 넌 뭐랄까.. 마치 베를린 같아. 왜냐하면 치명적인 독일 수도.';
console.log(jujeob);

// #2
console.log(this);
 */

const person = {};

Object.defineProperties(person, {
  firstName: {
    value: 'Yunseon',
    writable: true,
    enumerable: true,
    configurable: true,
  },

  lastName: {
    value: 'Park',
    writable: true,
    enumerable: true,
    configurable: true,
  },

  fullName: {
    get() {
      return `${this.firstName} ${this.lastName}`;
    },

    set(name) {
      [this.firstName, this.lastName] = name.split(' ');
    },
    enumerable: false,
    configurable: true
  },
});

person.fullName = 'Heegun Lee';
console.log(person);
