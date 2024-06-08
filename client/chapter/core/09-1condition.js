/* ---------------- */
/* Condition        */
/* ---------------- */

// 그 영화 봤니?
//     ↓
// Yes | No
//     | 영화 볼거니?
//           ↓
//       Yes | No

/* let answer = prompt('자바스크립트 "공식" 이름은 무엇인가요');

if (answer === 'ECMAScript') {
  alert('정답입니다!')
} else {
  alert('모르셨나요? 정답은 ECMAScript입니다!')
} */

// 영화 봤니?

// 영화 볼거니?

/* fuction watchingMovie(){
  let didWatchMovie = confirm('봇치더락 봤어?');
  if (didWatchMovie) {
    console.log('그래 씹덕아');
  } else {
    let goingToWatchMovie = confirm('볼 예정이니?');
    if (goingToWatchMovie) {
      let withWho = prompt('누구랑?');
      console.log(withWho + '랑 볼 예정이구나');
    } else {
      console.log('외않봐?');
    }
  }
} */

let didWatchMovie = 'no';
let goingToWatchMovie = 'yes';

const result = didWatchMovie.includes('yes')
  ? '언제 볼래?'
  : goingToWatchMovie.includes('yes')
    ? '나랑 보자'
    : '그래';

console.log(result);

function render(node, isActive) {
  let template = `
    <div>${isActive ? '안녕~~!!' : '잘가~~!!'}</div>
  `;
  node.insertAdjacentHTML('beforeend', template);
}

// if 문(statement)

// else 절(clause)

// else if 복수 조건 처리

// 조건부 연산자

// 멀티 조건부 연산자 식
