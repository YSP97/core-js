/* ---------------- */
/* For In Loop      */
/* ---------------- */

const javaScript = {
  creator: 'Brendan Eich',
  createAt: '1995.05',
  standardName: 'ECMAScript',
  currentVersion: 2023,
  hasOwnProperty() {
    return '난 누굴까~?';
  },
};

// 객체의 속성(property) 포함 여부 확인 방법
// - 모든 객체가 사용 가능하도록 속성이 확장되었을 때 포함 여부 결과는?

console.log('creator' in javaScript);

Object.prototype.nickName = '호랑이';

// 객체 자신의 속성인지 확인하는 방법
// - "자신의 속성을 가지고있는지 확인 방법"이 덮어쓰여질 수 있는 위험에 대처하는 안전한 방법은?

// console.log(javaScript.hasOwnProperty('toString'));

// 메서드 빌려쓰기(조상인 Object의 메서드를 불러오기, call은 function의 메소드 -> 빌려쓰는 메서드임)
// 현재 javaScript 객체에 hasOwnProperty를 오염시켜 놨기 때문에
// call은 부모의 능력이 아니어도 가져도 쓸 수 있음 ex) 'Array.prototype.forEach.call('hello',(e) => {coneole.log(e)})
console.log(Object.prototype.hasOwnProperty.call(javaScript, 'creator'));

// for ~ in 문
// - 객체 자신의 속성만 순환하려면?
// - 배열 객체 순환에 사용할 경우?

// enumerable: 열거 가능한 요소라서 -> 객체 프로퍼티 생성시 기본적으로 설정됨
console.clear();
for (let key in javaScript) {
  if (Object.prototype.hasOwnProperty.call(javaScript, key)) {
    // console.log(javaScript[key]);
  }
}

// 점 표기법: 변수 설정 X
// 대괄호 표기법 : 변수설정 O

const tens = [10, 100, 1_000, 10_000];

// for in은 정확한 순서를 보장해주지 않음(배열은 순서가 중요한디..)+성능도 저하됨
for (let key in tens) {
  console.log(tens[key]);
  // console.log(key);
}

// 결론: for in은 객체에게 양보하자. 배열에게는 쓰지말자



