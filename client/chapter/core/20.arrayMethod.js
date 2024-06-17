/* ------------------------------ */
/* Array's Methods                */
/* ------------------------------ */

// Array.isArray

const people = [
  {
    id: 0,
    name: '안재명',
    age: 25,
    job: '물음표살인마',
    imgSrc: 'https://randomuser.me/api/portraits/thumb/men/50.jpg',
    imgAlt: '대체 텍스트입니다.',
  },
  {
    id: 1,
    name: '황선우',
    age: 51,
    job: '요식업 사장님',
    imgSrc: 'https://randomuser.me/api/portraits/thumb/men/65.jpg',
    imgAlt: '대체 텍스트입니다.',
  },
  {
    id: 2,
    name: '유진',
    job: '디스코드 봇',
    age: 12,
    imgSrc: 'https://randomuser.me/api/portraits/thumb/men/75.jpg',
    imgAlt: '대체 텍스트입니다.',
  },
  {
    id: 3,
    name: '김한울',
    job: '비둘기',
    age: 39,
    imgSrc: 'https://randomuser.me/api/portraits/thumb/men/78.jpg',
    imgAlt: '대체 텍스트입니다.',
  },
];

/* 요소 순환 ---------------------------- */

// forEach

people.forEach((user) => {
  console.log(user.job);
});

const span = document.querySelectorAll('span');

span.forEach((tag) => {
  tag.addEventListener('click', function () {
    this.style.color = 'dodgerblue';
  });
});

// const first = document.querySelector('.first')
// first.addEventListener('click', () => {
//   console.log('first를 클릭하셨군뇨?')
// })

// const second = document.querySelector('.second');
// second.addEventListener('click', () => {
//   console.log('second를 클릭하셨군뇨?');
// });
// const third = document.querySelector('.third');
// third.addEventListener('click', () => {
//   console.log('third를 클릭하셨군뇨?');
// });

/* 원형 파괴 ----------------------------- 위험하다*/

// push
// people.push('admin')
// pop
// people.pop()
// unshift
// shift
// reverse -> 원본값을 뒤집은거라 위험
// 원본을 복사하면 Good
const arr = [...people];
arr.reverse();

// console.log(arr)
// splice -> push, pop, shift, unshift 전부 합친거
// people.splice(0,2,'안녕') //0부터 2까지만 잘르고 '안녕' 추가 => 원본 훼손

// sort -> 원본 훼손

function compare({ age: a }, { age: b }) {
  if (a > b) return 1; // 첫 번째 값이 두 번째 값보다 큰 경우 -> 양수이면 앞에 것이 뒤로 감
  if (a == b) return 0; // 두 값이 같은 경우 -> 0이면 순서 변경 X
  if (a < b) return -1; // 첫 번째 값이 두 번째 값보다 작은 경우 -> -1이면 앞의 것이 앞으로 감
}

// people.sort(compare)

/* 새로운 배열 반환 ------------------------ */

// concat
// toSpliced

const toSpliced = people.toSpliced(0, 2); // 원본데이터는 훼손되지 않으면서 잘림

// toSorted
const toSorted = people.toSorted(compare);

// toReversed

const toReversed = people.toReversed();

// toSpliced
// map

const nameList = people.map((user) => user.name);

// 현재 나이dp +2 배열 반환
const ageList = people.map((user) => user.age + 2);

const age = people.map((u) => u.age + 2);

// people 객체 순회하면서 template 만들기
const cardTag = people.map(({ name, age, job, imgSrc, imgAlt }) => {
  let template = /* html */ `
    <li class="userCard">
      <div class="imageField">
        <img src="${imgSrc}.jpg" alt="${imgAlt}" />
      </div>
      <ul class="contents">
        <li> <span class="strong">이름</span> : ${name}</li>
        <li> <span class="strong">나이</span> : ${age}</li>
        <li> <span class="strong">직업</span> : ${job}</li>
      </ul>
    </li>
  `;
  return template;
});

const ul = document.querySelector('ul');

cardTag.forEach((tag) => ul.insertAdjacentHTML('beforeend', tag));

// ul태그 존재할때 ul 안에 템플릿 넣어주기
// const ul = document.querySelector('ul');

// nameTag.forEach((tag) => ul.insertAdjacentHTML('beforeend', tag));

/* 요소 포함 여부 확인 ---------------------- */

// indexOf
// lastIndexOf
// includes

/* 요소 찾기 ------------------------------ */

// find -> 단일 대상만 찾음

const 황 = people.find((item) => {
  return item.name === '황선우';
});

// findIndex -> 인덱스 번호 찾기

/* 요소 걸러내기 --------------------------- */

// filter -> 반환값이 배열이다!
const filter = people.filter((item) => {
  return item.age > 20;
});

// console.log(...filter);

/* 요소별 리듀서(reducer) 실행 -------------- */

// reduce

const reduce = people.reduce((acc, cur) => acc + cur.age, 0);

// reduceRight: 반대로
const template1 = people.reduceRight((acc, cur) => {
  return acc + `<li class="userCard"> ${cur.name} :  ${cur.age} </li>`;
}, '');

ul.insertAdjacentHTML('beforeend', template1);

// reduceRight

/* string ←→ array 변환 ------------------ */

// split: 문자를 배열로 만들어 줌

const str = '유진 정민 현주 재명';

const stringToArray = str.split(' ');
console.log(stringToArray);

// join: 배열을 문자로 만들어 줌

const arrayToString = stringToArray.join('-');
console.log(arrayToString);

const products = [
  { name: '냉동 만두', price: 10000, brand: '비비고' },
  { name: '냉동 피자', price: 15000, brand: '오뚜기' },
  { name: '냉동 치킨 너겟', price: 12000, brand: '하림' },
  { name: '냉동 감자튀김', price: 8000, brand: '맥케인' },
  { name: '냉동 새우', price: 18000, brand: '곰곰' },
];

// foreach는 어케 만들어진걸까...?
[1, 2, 3].forEach(() => {}); // 이걸 함수로 어케 만들었을까?

const forEach = (f, i) => {
  for (const a of i) {
    f(a);
  }
};

forEach(
  (item) => {
    console.log(item);
  },
  [1, 2, 3]
);

// map은 어케 만들어진걸까...?
const map = (f, i) => {
  let result = [];

  for (const a of i) {
    result.push(f(a));
  }

  return result;
};

console.log(map((n) => n + 2, [1, 2, 3]));

// filter는 어케 만들어진걸까..?
const _filter = (f, i) => {
  let result = [];

  for (const a of i) {
    if (f(a)) {
      result.push(a);
    }
  }
  return result;
};

console.log(
  'filter:',
  _filter((n) => n > 3, [1, 2, 3, 4, 5])
);

// reduce는 어케 만들어진걸까..?

const _reduce = (f, acc, i) => {
  if (!i) {
    i = acc;
    acc = i.shift();
    // i = acc[Symbol.iterator]();
    // acc = i.next().value
  }

  for (const a of i) {
    acc = f(acc, a);
  }

  return acc;
};

const add = (a, b) => a + b;

console.log(_reduce((t, p) => t + p.price, 0, products));

console.log(
  _reduce(
    add,
    map(
      (p) => p.price,
      _filter((p) => p.price < 10000, products)
    )
  )
);
