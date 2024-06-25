// import {  } from './lib/index.js'; // 실행 안해도 일반 애니메이션으로 건 gsap그거는 이렇게 연결만 해도 실행이 된다고 함...
import clearContents from './lib/dom/clearContents.js';
import { endScroll } from './lib/dom/endScroll.js';
import {
  diceAnimation,
  getNodes,
  getNode,
  attr,
  insertLast,
} from './lib/index.js';

// 1. 주사위 애니메이션
// 2. 주사위 굴리기 버튼을 클릭하면 diceAnimation 실행될 수 있도록

const btnGroupt = getNodes('.buttonGroup > button');

const [rollingDiceBtn, recordBtn, resetBtn] = btnGroupt;

const handleRollingDice = (() => {
  let isClicked = false;
  let stopAnimation;

  return () => {
    if (!isClicked) {
      stopAnimation = setInterval(diceAnimation, 100);
      recordBtn.disabled = true;
      resetBtn.disabled = true;
    } else {
      clearInterval(stopAnimation);
      recordBtn.disabled = false;
      resetBtn.disabled = false;
    }

    isClicked = !isClicked;
  };
})();

const recordListWrapper = getNode('.recordListWrapper');
let count = 0;
let total = 0;

function createItem(value) {
  const template = /* html */ `
  <tr>
    <td>${++count}</td>
    <td>${value}</td>
    <td>${(total += value)}</td>
  </tr>`;

  return template;
}

function rederRecordItem() {
  const diceValue = +attr(getNode('#cube'), 'dice');

  // 1. insertLast 사용
  // 2. template 전달
  // 3. diceValue interpolation(보간법) 하기 ex)<td>${diceValue}</td>

  insertLast('.recordList tbody', createItem(diceValue));
  endScroll(recordListWrapper);
}

function handleRecord() {
  recordListWrapper.hidden = false;

  rederRecordItem();
}
function handleReset() {
  recordListWrapper.hidden = true;
  clearContents('.tbody');
  count = 0;
  total = 0;
}

rollingDiceBtn.addEventListener('click', handleRollingDice);
recordBtn.addEventListener('click', handleRecord);
resetBtn.addEventListener('click', handleReset);
