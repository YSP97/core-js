/* ------------ */
/* For Loop     */
/* ------------ */

// 2 ~ 10까지의 짝수 출력하기

let j = 0;
while (j <= 10) {
  j++;
  if (j % 2 !== 0) continue;
  console.log(j);
}

for (let n = 0; n <= 10; n++) {
  if (n % 2 !== 0) continue;
  console.log(n);
}

console.clear();

const frontEndDev = 'HTML CSS SVG JavaScript jQuery React Redux'.split(' ');

let i = 0;
let l = frontEndDev.length;

// while 문 → for 문 (순환)
// - 실행 흐름
// - 순환 중단 또는 이어서 순환
//   - 조건이 맞을 경우, 이어서(continue) 순환
//   - 조건: SVG, jQuery는 출력하지 마세요.
/* console.clear();
for (let i = 0; i < l; i++) {
  let value = frontEndDev[i];
  let lower = value.toLowerCase();

  if (value.includes('jquery') || value.includes('svg')) continue;

  console.log(value);
} */

console.log('------------------------');

//   - 조건이 맞을 경우, 순환 중단(break)
//   - 조건: JavaScript 까지만 출력하세요.

/* for (let j = 0; j < l; j++) {
  let value = frontEndDev[j];
  let lower = value.toLowerCase();

  if (lower.includes('jquery')) break;

  console.log(value);
} */


//   - 무한 루프 (브레이크)
//   - for 문 (역순환)

for (let i = 0; i < l; i++) {
  let arr = [...frontEndDev];
  console.log(arr.shift());
}
