const ENDPOINT = 'https://jsonplaceholder.typicode.com/users/3';

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
  onSuccess = null,
  onFail = null,
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

        onSuccess(data);
      } else {
        onFail('실패하셨슴다');
      }
    }
  });

  xhr.send(JSON.stringify(body)); // HTTP 요청을 서버로 전송
}

// 1. 무조건 매개변수 순서에 맞게 작성 ✅
// 2. 매개변수 안쓰면? ✅

// xhr({
//   onSuccess(data) {
//     console.log(data);
//   },
//   onFail(err) {console.log(err)},
//   url: ENDPOINT,
// });

xhr.get = (url, onSuccess, onFail) => {
  xhr({ url, onSuccess, onFail });
};

xhr.post = (url, body, onSuccess, onFail) => {
  xhr({
    method: 'POST',
    body,
    url,
    onSuccess,
    onFail,
  });
};

xhr.put = (url, body, onSuccess, onFail) => {
  xhr({
    method: 'PUT',
    body,
    url,
    onSuccess,
    onFail,
  });
};

xhr.delete = (url, onSuccess, onFail) => {
  xhr({
    method: 'DELETE',
    url,
    onSuccess,
    onFail,
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

// 외않되..? -> 아마 우리가 테스트 API를 맘대로 삭제하는 걸 막으려고 그런듯...
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
