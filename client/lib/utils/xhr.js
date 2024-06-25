const ENDPOINT = 'https://jsonplaceholder.typicode.com/users';

//  [readyState]
// 0 : uninitialized
// 1 : loading
// 2 : loaded
// 3 : interactive
// 4 : complete   => onSuccess / onFail

const user = {
  name: '박윤선',
  age: 18,
  gender: 'female',
};

// 객체 합성

function xhr({
  method = 'GET',
  url = '',
  body = null,
  성공 = null,
  실패 = null,
  headers = {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
  }, // 구조분해 할당 => 순서 상관 없음 지존이다.
}) {
  const xhr = new XMLHttpRequest();

  xhr.open(method, url); // HTTP 요청을 초기화

  Object.entries(headers).forEach(([key, value]) => {
    xhr.setRequestHeader(key, value);
  }); // header 설정

  xhr.addEventListener('readystatechange', () => {
    const { readyState, status, response } = xhr;

    if (readyState === 4) {
      if (status >= 200 && status < 400) {
        const data = JSON.parse(response); // 문자열을 js 객체로 변환

        성공(data); // ???
      } else {
        실패('실패!');
      }
    }
  });

  xhr.send(JSON.stringify(body)); // HTTP 요청을 서버로 전송
}

// 1. 무조건 매개변수 순서에 맞게 작성 ✅
// 2. 매개변수 안쓰면? ✅

// xhr({
//   성공(data) {
//     console.log(data);
//   },
//   실패() {},
//   url: ENDPOINT,
// });

xhr.get = (url, 성공, 실패) => {
  xhr({ url, 성공, 실패 });
};

xhr.post = (url, body, 성공, 실패) => {
  xhr({
    method: 'POST',
    body,
    url,
    성공,
    실패,
  });
};

xhr.put = (url, body, 성공, 실패) => {
  xhr({
    method: 'PUT',
    body,
    url,
    성공,
    실패,
  });
};

xhr.delete = (url, 성공, 실패) => {
  xhr({
    method: 'DELETE',
    url,
    성공,
    실패,
  });
};

// 실행해보쟈
// xhr.get(
//   ENDPOINT,
//   (data) => {
//     console.log(data);
//   },
//   (err) => {
//     console.log(err);
//   }
// );

// xhr.post(
//   ENDPOINT,
//   user,
//   (data) => {
//     console.log(data);
//   },
//   (err) => {
//     console.log(err);
//   }
// );

// xhr.put(
//   ENDPOINT,
//   user,
//   (data) => {
//     console.log(data);
//   },
//   (err) => {
//     console.log(err);
//   }
// );

// 외않되..?
// 아마 서버 삭제는 우리가 할 수없게 서버쪽에서 설정해놨을거라구 그랬음...
// xhr.delete(
//   ENDPOINT,
//   (data) => {
//     console.log(data);
//   },
//   (err) => {
//     console.log(err);
//   }
// );

/* xhr promise 방식 */
// xhr.port(ENDPOINT).then(() => {});
