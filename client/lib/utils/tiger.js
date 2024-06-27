const ENDPOINT = 'https://jsonplaceholder.typicode.com/users';

// 왜 response 객체가 아니라 promise 객체를 반환해??? => async 함수는 무조건 promise 객체를 반환함
const defaultOptions = {
  method: 'GET',
  body: null,
  headers: {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
  },
};

export const tiger = async (options) => {
  const { url, ...restOptions } = {
    ...defaultOptions,
    ...options,
    headers: {
      ...defaultOptions.headers,
      ...options.headers,
    },
  };

  const response = await fetch(url, restOptions);

  // console.log(await response.json());

  if (response.ok) { // http 상태 코드가 200번대일때(요청이 성공적)
    // response와 status가 합쳐진 느낌의 프로퍼티...boolean값임
    response.data = await response.json(); // 문자 <-> 객체 변환 알아서 해줌
  }

  return response; // 위 코드 다 실행되어야 리턴하도록 위에서 await 사용중
};

const result = await tiger({ url: ENDPOINT });

// console.log(result);

tiger.get = (url, options) => {
  return tiger({
    // await으로 사용하려면 프라미스 객체 반환해야 함
    url,
    ...options, // 나열해서 한번에 받아야함
  });
};

tiger.post = (url, body, options) => {
  return tiger({
    method: 'POST',
    url,
    ...options,
    body: JSON.stringify(body),
  });
};

tiger.delete = (url, options) => {
  return tiger({
    method: 'DELETE',
    url,
    ...options,
  });
};

tiger.put = (url, body, options) => {
  return tiger({
    method: 'PUT',
    url,
    ...options,
    body: JSON.stringify(body),
  });
};
tiger.patch = (url, body, options) => {
  return tiger({
    method: 'PUT',
    url,
    ...options,
    body: JSON.stringify(body),
  });
};
