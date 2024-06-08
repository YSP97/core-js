/* ---------------------- */
/* Functions → Arrow      */
/* ---------------------- */

const calculateTotal = function (moneyA, moneyB, moneyC, moneyD) {
  return moneyA + moneyB + moneyC + moneyD;
};

let resultX = calculateTotal(10000, 8900, 1360, 2100);
let resultY = calculateTotal(21500, 3200, 9800, 4700);
let resultZ = calculateTotal(9000, -2500, 5000, 11900);

// console.log(resultX);
// console.log(resultY);
// console.log(resultZ);

// 함수 선언 → 화살표 함수 (표현)식                                                                  {#edc4b0}
// arrow함수에서는 arguments가 존재하지 X
// ...args: rest parameter(나머지 파라미터) -> 장점: arguments와 같이 유사배열이 아닌 배열임
// 모든 함수에서 이용 가능, (a, ...args)가 가능 -> a에 1000을 할당하고 나머지를 args에 할당하겠다라는 뜻

let calcAllMoney = (...args) => {
  // for문을 이용해서 result에 rest parameter 합계 담기
  let total = 0;
  /* for (let i = 0; i < args.length; i++) {
    total += args[i];
  } */
  /* for (let elem of args) {
    total += elem;
  } */

  // forEach를 이용한 result에 rest parameter 합계 담기
  /* args.forEach(function (price) {
    total += price;
  }); */

  // forEach arrow fucntion를 이용한 result에 rest parameter 합계 담기
  /* args.forEach((price) => (total += price)); */

  // return total;

  // reduce를 이용한 result에 rest parameter 합계 담기
  /* const sum = args.reduce(function (acc, cur) {
    return acc + cur;
  }, 0); */
  // return sum;
  //reduce arrow function 를 이용한 result에 rest parameter 합계 담기
  // return args.reduce((acc, cur) => acc + cur, 0);
};

// calcAllMoney함수 arrow fucntion으로 표현하기
/* const calc = (...args) => args.reduce((acc, cur) => acc + cur, 0);
const sum = calc(1000, 5000, 4500, 13000);
console.log(sum); */

// map을 arrow function으로 표현하기
/* map([1, 2, 3], (item) => item * 2);
console.log(a); */

const result = calcAllMoney(1000, 5000, 4500, 13000);
// console.log(result);

// 화살표 함수와 this

/* 다음 함수를 작성해봅니다. -------------------------------------------------- */

// pow(numeric: number, powerCount: number): number;
/* let pow = (num, powCount) => {
  let result = 1;
  for (let i = 0; i < powCount; i++) {
    result *= num;
  }
  return result;
}; */

// 표현식
// const pow = (numeric,powerCount) => {

//   return Array(powerCount).fill(null).reduce((acc)=>{
//     return acc *= numeric
//   },1)

// }

const pow = (numeric, powerCount) =>
  Array(powerCount)
    .fill(null)
    .reduce((acc) => (acc *= numeric), 1);

// repeat(text: string, repeatCount: number): string;

/* let repeat = (text, repeatCount) => {
  let result = '';
  for (let i = 0; i < repeatCount; i++) {
    result += text;
  }

  return result;
}; */

// const repeat = (text,repeatCount)=>{
//   return Array(repeatCount).fill(null).reduce((acc)=>{
//     return acc + text
//   },'')
// }

const repeat = (text, repeatCount) =>
  Array(repeatCount)
    .fill(null)
    .reduce((acc) => acc + text, '');
console.log(repeat('안녕', 3));

// 자바스크립트 함수의 양면의 얼굴 => 생성자(constructor) -> new키워드를 붙여 함수를 호출하면 return값이 객체가 아닌이상 무시하고 객체를 내보냄
// -> 객체를 대량생산할 때 사용함
// 규칙: 생성자함수는 반드시 앞에 대문자로 표기하면 new키워드로 호출한다
// 함수는 일반함수와 생성자함수가 있다
// arrow function은 prototype을 내장 X -> 생성자함수 생성할 수 X, 필요한 것만 가져서 arrow function은 참 가볍고 좋다!
// 생성자함수만 사용할 수 있는 문법 : class
// 일반함수는 arrow function 권장, 생성자함수는 class를 이용하는 것을 권장

function Button(text) {
  this.content = text;
  // this: 나를 호출한 대상 여기서는 b라는 객체
}

const b = new Button('more');
console.log(b);

// 일반함수
// - constructor 내장(concise method는 제외 -> constructor 내장 X, this는 바인딩됨)
// - this: 나를 호출한 대상을 this
// 객체의 메서드로 사용이 많이 됨 -> this를 찾기 위해
// 객체의 method를 정의해야 하는 경우 사용하자!

// 화살표 함수
// - this: 바인딩하지 않음 -> 상위 컨텍스트에서 찾음
// 상위 context에서 찾음
// - constructor 내장 X
// - 메서드 안에 함수를 작성해야 할 때 사용하자! => 내 상위 this를 가져오가 때문에

const user = {
  name: '박윤선',
  sayHi: function () {
    console.log(this); // user 객체
  },
  sayHi2: () => {
    console.log(this); // window
  },
  // arrow function은 this를 바인딩하지 않음

  sayHi3() {
    console.log(this); // user
    // concise method는 this 바인딩됨
    // 이 방식을 제일 많이 사용함
  },
  total: 0,
  grade: [100, 80, 30],
  totalGrade() {
    /* function sayHi4(){
      console.log(this); // window: 이 sayHi함수의 this는 윈도우에서 호출된것임
    }

    sayHi4(); // 누군가가 호출해준 게 아니면 즉(user.~형태가 아니면) 전역에서 호출된거라고 판단함

    const sayHi5 = () => {
      console.log(this); // 화살표함수는 this를 바인딩하지 않으니까 상위 컨텍스트에서 찾아옴 -> 부모가 user이므로 user을 출력함
    };
    sayHi5(); */

    this.grade.forEach(function (item) {
      console.log(this); // window-> 이유: 콜백 안에서(콜백함수는 일반함수로 호출되어서 기본적으로 this에 윈도우를 바인딩함) this를 찾기 때문에
    });

    this.grade.forEach((item) => {
      this.total += item; // user -> arrow 함수나까 상위 컨텍스트에서 호출한 대상을 찾음
    });

    return this.total;
  },
};

user.totalGrade();

// 객체의 method를 정의하는 방법
// 1. 일반함수로 정의
// 2. 화살표함수로 정의
// 3. concise method(간결)
