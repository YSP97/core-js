/* -------------------------- */
/* Optional Chaining          */
/* -------------------------- */

const portableFan = {
  maker: 'fromB',
  brand: 'FD221',
  type: 'neckband',
  photo: {
    static: 'https://bit.ly/3OS50UD',
    animate: 'https://bit.ly/3P8646q',
  },
  // getFullName() {
  //   return `${this.brand}, ${this.maker}`;
  // },
};

// 아래 코드는 문제가 있어 런타임 중 오류가 발생합니다.
// console.log(portableFan.photos.animate);

// 오류를 발생시키지 않으려면 아래와 같이 작성해야 합니다.
// if ('photos' in portableFan) {
//   if ('animate' in portableFan.photos) {
//     console.log(portableFan.photos.animate);
//   }
// }

// 위 구문을 논리곱 연산자를 사용한 방식으로 변경해봅니다.

portableFan && portableFan.photos && portableFan.photos.animate

// 위 구문을 옵셔널 체이닝을 사용한 구문으로 변경해봅니다.

portableFan.photos?.animate

// 메서드 사용 시, 옵셔널 체이닝을 사용해봅니다.
const fullName = portableFan.getFullName?.(); // 현재 getFullName 메서드가 없으므로 undefinded를 출력해줌

console.log(fullName)


// 객체의 프로퍼티 접근 시, 옵셔널 체이닝을 사용해봅니다.


// sync(동기), async(비동기)


console.log(1);
console.log(2);

// window.setTimeout
// 비동기 처리를 통해 느려지게 해보자
setTimeout(function(){
  console.log(3);
}, 1000) // 코드 순서대로 출력이 안됨 -> 즉 얘는 따로 실행이 되고있는것임
// 이 1초라는 시간은 보장될 수 없음(오래 걸리는 함수같은 게 코드 실행 중간에 걸리게 되면 그 실행코드의 스텍이 비워지고 실행되기 때문에) 따라서 이를 해결 하는 방식이 => async await, callback

console.log(4);
console.log(5);


// 비동기로 태그를 만들 때 에러가 발생하지 않도록 옵셔널 체이닝 활용하는 방법
const button = document.querySelector('.my-button');



const id = setTimeout(() => {
  const template = /* html */`
  <button type="button" class = "my-button">my-button</button>`

  document.body.insertAdjacentHTML('beforeend', template);
}, 3000)

// clearTimeout(id) // id의 고유시간 4초 이상 시 시간 제거 즉 다음 코드 실행

button?.addEventListener('click', () => {
  console.log('클릭!') // 위의 dom 할당이 확실하게 되지 않아서(시간차때문에) 오류뜸 -> 따라서 옵셔널 체이닝으로 에러를 방지할 수 있음
})



// 주기적 실행 시간 설정 -> 지속적으로 함수를 수행해야하는경우
let count = 0;

const id2 = setInterval(() => {
  console.log(++count);

  document.querySelector('.second').style.transform =
    `translateY(${count}px) rotate(${count}deg)`;

  if (count >= 300) {
    clearInterval(id2)
  }
}, 10);

// 시간에 따른 실행 멈추기
// clearTimeout(id2);
// clearInterval(id2);


function animation(){
  console.log(++count);
  document.querySelector('.first').style.transform =
  `translateY(${count}px) rotate(${count}deg)`;
  const id3 = requestAnimationFrame(animation); // requestAnimationFrame: 컴퓨터에 따른 호출 숫자를 조절해줌
  if (count >= 300) {
    cancelAnimationFrame(id3);
  }
}

animation()


// 동기: 로직대로 일처리가 일어나는(하나가 끝나야 다음일을 수행) -> 자바스크립트는 기본적으로 동기적으로 동작함
// 비동기적 처리: 하나가 다 끝나지 않아도 다른 일을 수행, 동기적 처리의 반대


// 자바스크립트는 동기적 동작을 함 -> 연산이 오래 걸리는 작업 코드가 걸리면 수행을 진행하지 않음
// 임의대로 비동기적 처리가 가능하게 할 수 있음 -> 웹브라우저를 이용해서 웹에서 처리하는 방식(web API)