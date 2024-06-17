/* ------------------------- */
/* Copy object by reference  */
/* ------------------------- */

// 복사(copy) vs. 참조(reference)

let message = '문자 값은 프리미티브 데이터 타입으로 값이 복사됩니다.';
let messenger = {
  name: 'kakao talk',
  manufacture: 'kakao',
};

let text = message;
let conversationTool = messenger; // 같은 주소를 가리킴

// 비교 (복사 vs. 참조)
console.log(message == text);
console.log(message === text);
console.log(messenger == conversationTool);
console.log(messenger === conversationTool);

// 객체 복사
// 1. for ~ in 문을 사용한 복사
const cloneObject = {};

for (let key in messenger) {
  cloneObject[key] = messenger[key]; // 얕은 복사 -> cloneObject의 값 변경해도 messenger 영향 X
}

console.log(cloneObject);

// 2. Object.assign()을 사용한 복사 -> 얕은 복사
const copyObject = Object.assign({}, messenger);
console.log(copyObject);

// 3. 전개 연산자(...)를 사용한 복사 -> 얕은 복사

const spreadObject = { ...messenger };
console.log(spreadObject);

// 4. 객체를 복사해주는 유틸 함수
const copiedObject = (obj) => Object.assign({}, obj);

const newObject = copiedObject(messenger);
console.log(newObject);

// 객체 병합(합성)
const cssMapA = {
  color: '#4b004b',
  margin: '0 auto',
};

const cssMapB = {
  display: 'flex',
  flexFlow: 'column',
  justifyContent: 'center',
  padding: '0.4em 0.62em',
  color: '#3f9e97',
};

let combinedCssMap = { ...cssMapA, ...cssMapB };
// 병합하려는 두 객체 프로퍼티가 겹칠때는 뒤에있는 것으로 덮어짐 -> 뒤가 우선순위 더 높다
console.log(combinedCssMap);

// 중첩된 프로퍼티에 객체를 포함하는 객체 복사
// 얕은 복사 vs. 깊은 복사
const containerStyles = {
  'min-height': '100vh',
  'max-width': {
    sm: '90%',
    md: 640,
    lg: 960,
    xl: 1120,
    xxl: 1140,
  },
};

// let copiedContainerStyles = {...containerStyles}; // 얕은복사
// let copiedContainerStyles = cloneDeep(containerStyles); // 깊은 복사
let copiedContainerStyles = {
  ...containerStyles,
  ['max-width']: {
    ...containerStyles['max-width'],
  },
}; // 전개를 통한 깊은 복사

// 1. 깊은 복사 유틸리티 함수
function cloneDeep(object) {
  return Object.fromEntries(
    // Object.fromEntries: 배열을 객체로 만들어줌
    Object.entries(object).map(([key, value]) => {
      let type = typeof value;
      if (value && type === 'object') {
        value = cloneDeep(value);
      }
      return [key, value];
    })
  );
}


const defaultOptions = { //기본 객체 설정
  method: 'GET',
  body: null,
  headers: {
    content: 'application/json',
    access: '*',
  },
};

function ajax(options) {
  // 기본값과 사용자가 설정한 값을 합성
  // 이런식으로 전개해서 합성해야(새로 객체를 만들어야)기본값이 훼손되는 일을 방지됨
  const { method, headers, body } = { // 구조분해 할당 하면서 합성
    ...defaultOptions,
    ...options,
    headers: {
      // headers는 복사가 안되는 것을 방지하기 위해 깊은 복사해줌
      ...defaultOptions,
      ...options,
    },
  }; // 믹스인: 객체 합성

  // const {method, headers, body} = newOption
  // console.log(newOption);
  console.log(method);
  
}

ajax({
  method: 'POST',
  body: '데이터',
});

// 2. Lodash 라이브러리 활용
// _.cloneDeep(value)
// 참고: https://lodash.com/docs/4.17.15#cloneDeep
// CDN : https://cdn.jsdelivr.net/npm/lodash@4.17.21/lodash.min.js
