import { getNode } from '../dom/getNode.js';
import { insertLast } from '../dom/insert.js';
import { isNumber, isObject } from './type.js';
import { xhrPromise } from './xhr.js';

function delay(callback, timeout = 500) {
  setTimeout(callback, timeout);
}

const first = getNode('.first');
const second = getNode('.second');

// delay(() => {
//   first.style.top = '-100px';
//   second.style.top = '100px';

//   delay(() => {
//     first.style.transform = 'rotate(360deg)';

//     delay(() => {
//       first.style.top = '0px';
//       second.style.top = '0px';
//     });
//     second.style.transform = 'rotate(-360deg)';
//   });
//
// });

// 프라미스 사용법: new키워드로 객체 생성, 반드시 콜백함수 있어야 함
// state(pending: 대기중, fullfield 등)와 result(기본적으로 undefined 등등)를 가짐
// result에 접근할 수 없음
// 두 가지 선택지 존재: 성공(resolve) / 실패(reject) => resolve,  reject 매개변수 둘 다 함수임
// 매개변수 첫번째가 무조건 성공, 두번째가 실패임

const shouldRejected = false;
const p = new Promise((resolve, reject) => {
  if (!shouldRejected) {
    resolve('성공!!');
  } else {
    reject('실패!!');
  }
});

// console.log(p);
const defaultOptions = {
  shouldRejected: false,
  data: '성공!!',
  errorMessage: '알 수 없는 오류',
  timeout: 1000,
};

// 객체 합성
function delayP(options) {
  let config = { ...defaultOptions };
  if (isNumber(options)) {
    config.timeout = options;
  }

  if (isObject) {
    config = { ...defaultOptions, ...options };
  }
  let { shouldRejected, data, errorMessage, timeout } = config;

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (!shouldRejected) {
        resolve(data);
      } else {
        reject({ message: errorMessage });
      }
    }, timeout);
  });
}

delayP(3000);

// delayP(); // <Promise> 객체 반환

// then : 프라미스 객체 호출한 뒤 어떤 작업을 할때
// - 두 개의 매개변수(콜백 함수)를 받음
// delayP().then(console.log) // 프라미스 객체가 가지는 result를 매개변수로 받아서 console.log에 인자로 전달

// delayP().then().then() // 프라미스 체인

// then 메서드는 두 개의 매개변수가 필요하다면서 왜 두번째 매개변수가 없는데도 작동하나? => catch가 알아서 돌아간다고 함 모든 then 내부 코드가 실행된 뒤 catch가 실행되어 에러를 잡아줌, 모든 then 순간마다 에러를 핸들링 하려면 두번째 매개변수(에러)를 써줘야함

// then은 기본적으로 알아서 프라미스 객체를 리턴하지만 result값 가질수 없는 그냥 빈 껍데기고 리턴문을 통해 프라미스 객체를 반환하면 result를 가질수 있다
// 이때 리턴되는 것은 프라미스 객체 내부의 result이다 즉 이경우에는 resolve 함수 내부의 '성공!!'일 것
// then return에 다른 원시값을 리턴하면 그 값이 result에 저절로 들어가게 됨

delayP()
  .then((res) => {
    first.style.top = '-100px';
    second.style.top = '100px';

    return delayP(); // 프라미스 객체 내부의 메서드 then을 사용하여 시간 delay를 주기 위해 return으로 객체를 내보내고 있다.
  })
  .then((res) => {
    first.style.transform = 'rotate(360deg)';
    second.style.transform = 'rotate(-360deg)';

    return delayP();
  })
  .then((res) => {
    first.style.top = '0px';
    second.style.top = '0px';

    return delayP();
  });

// 왜 프라미스를 써야돼?? -> then은 함수라 값을 return가능 프라미스 객체 내부의 then 메서드를 계속 불러올 수 있음,  순서가 보장되고 가독성이 올라감

// async, await은 try..catch 혹은 then 에러 잡아야함
// async: 함수 앞에 붙여서 씀 => 무조건 Promise Object를 반환함
// await: 2가지 기능 수행, await 뒤에는 반드시 Promise 객체가 와야함
//        1. result([[PromiseResult]]) 꺼내오기
//        2. 코드의 실행 흐름을 제어 가능
async function delayA(data) {
  const p = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('성공!');
    }, 2000);
  });

  const result = await p; // 코드의 실행 흐름 제어 -> result에 결과값을 담을때까지 아래 코드 실행하지 않음(by await)
  console.log(result);
  return data;
}

// delayA('지연').then((res) => {
//   console.log(res)
// });

// delayA()

// const data = await delayA('지연'); // async 함수 밖에 있는 await: top level await(예전에는 불가능했다고 함 현재 가능해진 기능)
// console.log(data);

async function 라면끓이기() {
  const a = await delayP({ data: '물' });
  console.log(a);

  const b = await delayP({ data: '스프' });
  console.log(b);

  const c = await delayP({ data: '면' });
  console.log(c);

  const d = await delayP({ data: '그릇' });
  console.log(d);
}

// 라면끓이기();

async function getData() {
  const data = await xhrPromise.get('https://pokeapi.co/api/v2/pokemon/39');

  insertLast(
    document.body,
    `<img src = "${data.sprites.other.showdown['front_default']}" alt = "" >`
  );
}

getData();
