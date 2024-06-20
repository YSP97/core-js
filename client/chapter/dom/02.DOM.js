/* --------------------------------- */
/* DOM traversal                     */
/* --------------------------------- */

/* 모든 노드에서 사용 */
// - parentNode
// - childNodes
// - firstChild
// - lastChild
// - previousSibling
// - nextSibling

/* 요소 노드에서만 사용 가능 */
// - parentElement
// - children
// - firstElementChild
// - lastElementChild
// - previousElementSibling
// - nextElementSibling

/* 문서 대상 찾기 */
// - getElementById
// - getElementsByTagName
// - getElementsByClassName
// - querySelector
// - querySelectorAll
// - closest

/* 문서 대상 확인 */
// - matches
// - contains

getNode('.list', '#visual-section');
getNodes('.list > li');

// 1. id가 visula-section인 section 태그 요소
const section = document.getElementById('visual-section');

// 2. class가 list인 ul 태그 요소
const list = document.querySelector('.list');

// 3. list 요소 안에 about li 태그 요소
// const about = list.querySelector('li:nth-child(2)');

const aboutLi = [...list.children].find((li) => li.textContent === 'about');

// 4. name 속성이 search-box인 form 태그 요소
const form = document.querySelector('form[name="search-box"]');

// 5. form 요소 안에 있는 모든 자식 요소
const formChild = form.children;
// const child = form.querySelectorAll('*')

// 6. form 요소 안에 있는 input 태그 요소
const input = form.lastElementChild;
// const input = formChild[1];
