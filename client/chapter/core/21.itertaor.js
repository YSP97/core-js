/* ---------------------------------------------------------------------- */
/* Iterable Object                                                        */
/* ---------------------------------------------------------------------- */

// 배열을 일반화 한 객체
// for-of 문을 사용할 수 있는 객체
// Symbol.Iterator 메서드가 필히 구현되어야 함
// Symbol.Iterator 메서드는 이터레이터 객체를 반환하며
// 이터레이터 객체는 next() 메서드를 가짐 ({ done: Boolean, value: any } 타입 반환)

const arr = '1 2 3 4 5 6'.split(' ');

const iter = arr[Symbol.iterator](); // iterator 객체로 만들기

// for (const a of arr){
//   console.log(a)
// }
// for (const a of arr){
//   console.log(a)
// }
// for (const a of arr){
//   console.log(a)
// } // iterable한 요소인 arr는 for..of로 순환은 가능하지만 next() 메서드를 사용할 수 없고 반복 가능함

// for (const a of iter){
//   console.log(a)
// }
// for (const a of iter){
//   console.log(a)
// } // iterator 객체는 다음 순환에는 돌아가지 않음
console.log(iter.next().value); // 1
console.log(iter.next()); // {value: '2', done: false}
console.log(iter.next()); // {value: '3', done: false}
console.log(iter.next()); // {value: '4', done: false}
console.log(iter.next()); // {value: '5', done: false}
console.log(iter.next()); // {value: '6', done: false}
console.log(iter.next()); // {value: undefined, done: true} -> 반복이 끝났음을 알림

// [Symbol.iterator]를 함수로 만들자
const range = {
  from: 1,
  to: 5,
  length: 5,
  [Symbol.iterator]() {
    let current = this.from;
    let last = this.to;

    return {
      next() {
        if (current <= last) {
          return { value: current++, done: false };
        } else {
          return { done: true };
        }
      },
    };
  },
};

// 객체, 배열, 이터레이터 객체로 또 다른 자료형으로 보면 됨

// 유사배열 vs. 이터러블
// - 유사배열 : 인덱스 키와 length 속성을 가진 객체
// - 이터러블 : Symbol.Iterator 메서드를 가지는 객체

// 유사배열, 이터러블 배열화

// yield 값을 산출(뽑아냄)
function* gen() {
  yield 1;
  yield 2;
  yield 3;
}

const gene = gen();

const customIter = {
  *[Symbol.iterator]() {
    yield 1;
    yield 2;
    yield 3;
  },
};

for (const a of customIter) {
  console.log(a);
}

function* idGenerator() {
  let id = 1;
  while (true) {
    yield ++id;
  }
}

const id = idGenerator();

// 1. 일관된 반복 동작 제공 (for..of)
// 2. 커스텀 반복 제어 가능 (객체를 반복 가능한 상태로)
// 3. 지연 계산 (필요할 때 마다 반복을 돌림) 성능
// 4. 무한 시퀀스 생성 (무한대의 값 생성)
// 5. 비동기 반복 작업
// 6. 다양한 데이터 소스와의 통합 ( Map, Set )
