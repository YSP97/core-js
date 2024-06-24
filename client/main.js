import data from './data/data.js';
import clearContents from './lib/dom/clearContents.js';
import { getNode, getRandom, insertLast } from './lib/index.js';

console.log(data);

// [phase-1]
// 1. 주접 떨기 버튼을 클릭하는 함수
//    - 주접 떨기 버튼 가져오기
//    - 이벤트 연결하기

const submit = getNode('#submit');
const nameField = getNode('#nameField');

function handleSubmit(e) {
  e.preventDefault();

  const name = nameField.value;
  const list = data(name);
  const pick = list[getRandom(list.length)];
  const result = getNode('.result');
  clearContents(result);
  insertLast(result, pick);

  nameField.value = ''
}

submit.addEventListener('click', handleSubmit);
