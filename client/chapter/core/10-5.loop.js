/* --------------- */
/* For Of Loop     */
/* --------------- */

// 꼭 알아두기!!
// enumerable : 열거 가능한
// iterable: 반복 가능한

// for ... of -> iterable한 요소만 사용가능

// iterable한 요소들: string, array

// 배열의 특징
// 1. 순서(index)가 있다.
// 2. []
// 3. length가 있다.

// 얘는 배열? 객체? -> 유사배열
const arrayLike = {
  0: 'body',
  1: 'head',
  2: 'div',
  length: 3,
};

/* for (let value of arrayLike) {
  console.log(value);
  // arrayLike is not iterable
} */

// iterable한 요소는 -> Symbol.iterator을 내장하고 있음

const languages = [
  {
    id: 'ecma-262',
    name: 'JavaScript',
    creator: 'Brendan Eich',
    createAt: 1995,
    standardName: 'ECMA-262',
    currentVersion: 2022,
  },
  {
    id: 'java',
    name: 'Java',
    creator: 'James Gosling',
    createAt: 1995,
    standardName: null,
    currentVersion: 18,
  },
  {
    id: 'ecma-334',
    name: 'C#',
    creator: 'Anders Hejlsberg',
    createAt: 2000,
    standardName: 'ECMA-334',
    currentVersion: 8,
  },
];

// for ~ of 문
// - 특정 조건에서 건너띄기
// - 특정 조건에서 중단하기
// java라는 문자를 포함하고 있으면 continue

for (let value of languages) {
  let name = value.name;

  if (name.includes('Java') && name.length < 5) continue;

  // console.table(value);
}

const randomUser = {
  gender: 'female',
  name: { title: 'Ms', first: 'Carol', last: 'May' },
  location: {
    street: { number: 9162, name: 'Church Road' },
    city: 'Birmingham',
    state: 'Cumbria',
    country: 'United Kingdom',
    postcode: 'FO5E 4TN',
    coordinates: { latitude: '-4.3301', longitude: '155.0223' },
    timezone: {
      offset: '-4:00',
      description: 'Atlantic Time (Canada), Caracas, La Paz',
    },
  },
  email: 'carol.may@example.com',
  login: {
    uuid: '39e4e214-7f66-44a6-a3ba-3b5ce46b8e25',
    username: 'redduck745',
    password: 'picks',
    salt: '8xzqOzAn',
    md5: '7250e4042c2367cc82487f798c7c5253',
    sha1: '6c0e2fac669d6d7f11fb0bab52493f441cf5834b',
    sha256: '9e49256b8917113750533c24c015336af43d5d7130cf8faa19054c1ba36e7de8',
  },
  dob: { date: '1962-12-07T21:51:26.781Z', age: 59 },
  registered: { date: '2018-06-08T04:07:17.788Z', age: 4 },
  phone: '022 1280 9236',
  cell: '07653 428700',
  id: { name: 'NINO', value: 'SH 44 98 72 L' },
  picture: {
    large: 'https://randomuser.me/api/portraits/women/21.jpg',
    medium: 'https://randomuser.me/api/portraits/med/women/21.jpg',
    thumbnail: 'https://randomuser.me/api/portraits/thumb/women/21.jpg',
  },
  nat: 'GB',
};

// 객체의 키, 값 순환
// - for ~ in 문
// - for ~ of 문
// - 성능 비교 진단

// 객체를 배열로 만들어서 for of 사용하기
// Object.keys(객체) : 객체들의 키를 모아 하나의 배열로 변환함
// Object.values(객체) : 객체들의 값을 모아 하나의 배열로 변환함
// Object.entries(객체): 객체의 키와 값을 하나의 쌍을 만들고 이를 배열로 반환

const keys = Object.keys(arrayLike);
const values = Object.values(arrayLike);
const entries = Object.entries(arrayLike);

for (let key of keys) {
  console.log(key);
}
for (let value of values) {
  console.log(value);
}

for (let keyvalue of entries) {
  let key = keyvalue[0];
  let value = keyvalue[1];
  // console.log(key);
}

console.clear();
Object.prototype.nickName = 'tiger';

function hasProperty(obj, key) {
  return Object.prototype.hasOwnProperty.call(obj, key);
}

console.time()

// 처리시간: default: 3.697998046875 ms
for (let key in randomUser) {
  if (hasProperty(randomUser, key)) {
    const L1 = randomUser[key];

    console.log('\tL1 : ', L1);

    if (typeof L1 === 'object') {
      for (let key in L1) {
        if (hasProperty(L1, key)) {
          const L2 = L1[key];
          console.log('\t\tL2 : ', L2);

          if (typeof L2 === 'object') {
            for (let key in L2) {
              if (hasProperty(L2, key)) {
                const L3 = L2[key];

                console.log('\t\t\tL3 : ', L3);
              }
            }
          }
        }
      }
    }
  }
}


// 이짓거리 언제 다함..? -> 재귀함수를 이용하면 간편하게 처리 가능!
// 처리시간 default: 4.34912109375 ms -> 왜인지 더 오래걸림...ㅎ entries
for (let keyValue of Object.entries(randomUser)) {
  let key = keyValue[0];
  let value = keyValue[1];
  console.log('\tL1 : ', value);
  if (typeof value === 'object') {
    for (let keyValue of Object.entries(value)) {
      let key = keyValue[0];
      let value = keyValue[1];
      console.log('\t\tL2 : ', value);

      if (typeof value === 'object') {
        for (let keyValue of Object.entries(value)) {
          let key = keyValue[0];
          let value = keyValue[1];

          console.log('\t\t\tL3 : ', value);
        }
      }
    }
  }
}
console.timeEnd();




