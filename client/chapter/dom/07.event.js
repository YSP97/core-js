/* --------------------- */
/* Event Handling        */
/* --------------------- */

/* 이벤트 핸들링 3가지 방법 --------------------------------------------------- */

// 1. HTML 속성 : onclick="handler()"
function handler() {
  console.log('클릭 이벤트 발생!');
}

// 2. DOM 프로퍼티 : element.onclick = handler
const first = getNode('.first');
// first.onclick = handler;

// 3. 메서드 : element.addEventListener(event, handler[, phase])
// 이벤트 실행 시 생성되는 event 객체가 제공해주는 정보: type, taget... 이걸 e라는 매개변수로 담아준 것
function handleClick(e) {
  console.log(e.type);
  console.log(e.target);
  console.log(e.offsetX);
}

// first.addEventListener('click', handleClick);

const second = getNode('.second');

function bindEvent(node, type, handler) {
  if (isString(node)) node = getNode(node);
  node.addEventListener(type, handler);

  return () => node.removeEventListener(type, handler);
}

/* const firstEventRemove = bindEvent('.first', 'click', handleClick);
second.addEventListener('click', firstEventRemove); */

/* 이벤트 추가/제거 --------------------------------------------------------- */

// - addEventListener
// - removeEventListener

const ground = getNode('.ground');
const ball = getNode('#ball');

function handleClickBall({ offsetX: x, offsetY: y }) {
  ball.style.transform = `translate(${x - ball.offsetWidth / 2}px, ${y - ball.offsetWidth / 2}px)`;
}

// ground.addEventListener('click', handleClickBall);

function handleMove({ offsetX: x, offsetY: y }) {
  console.log(x, y);
  let template = /* html */ `
  <div class = "emotion" style="top: ${y}px; left: ${x}px;">🧡</div>
  `;

  insertLast(ground, template);
}

function debounce(callback, limit = 1000) {
  let timeout;

  return function (e) {
    // console.log(this); // ground
    // debounce()가 실행될 때 event 객체는 인수로 e 매개변수가 전달받음
    clearTimeout(timeout); // 타이머 제거 -> 1회일때는 실행되지 않음
    timeout = setTimeout(() => {
      // console.log(this);
      callback.call(this, e); // ground의 this로 강제 실행
    }, limit); // setTimeout id가 리턴됨
  };
}

ground.addEventListener(
  'mousemove',
  debounce((e) => {
    console.log(e);
    console.log(this);
  })
);

// debounce(() => {
//   console.log('hello');
// }); // 마지막에만 실행됨(debounce)

function throttle(callback, limit = 200) {
  let waiting = false;

  return function (...args) {
    if (!waiting) {
      callback.apply(this, args);
      waiting = true;

      setTimeout(() => {
        waiting = false;
      }, limit);
    }
  };
}

// ground.addEventListener('mousemove', throttle(handleMove));

// ground.addEventListener('mousemove', handleMove);
// window.addEventListener('resize', () => console.log('resize!'));

//throttle(수도꼭지), debounce(공 튀김 방지)

// addClass('.ground', ['a', 'b', 'c']);
// addClass('.ground', 'a', 'b', 'c');
// addClass('.ground', 'a,b,c');
addClass('.ground', { a: 'one', b: 'two' });