/* ----------------------------------------- /* 

          웹 컴포넌트


---------------------------------------------*/
class MyElement extends HTMLElement {
  // Life Cycle(생명주기): MyElement태그가 생성되고 사라질때 까지의 주기(웹 컴포넌트 뿐만 아니라 다양한 곳에서 사용됨)
  constructor() {
    super(); // 부모의 능력 상속
    // 엘리먼트가 생성됨
  }

  connectedCallback() {
    // 이름 정해진거임
    // 엘리먼트가 문서에 추가될 때 브라우저가 이 메서드를 제일 먼저 호출
    console.log('탄생함')
  }

  disConnectedCallback() {
    // 엘리먼트가 문서에서 제거될 때 브라우저가 이 메서드를 호출합니다.
    console.log('죽음')
  }
}

customElements.define('c-element', MyElement); // 태그 정의(만들 태그, 제공되는 클래스)
// 브라우저에게 <my-element> 태그가 우리의 새 클래스에 의해 제공된다고 알립니다.
// 커스텀 element는 반드시 -(하이픈)을 붙여서 만들어야 함


// 위처럼 define해 두면 새로운 태그를 이런식으로 계속 만들 수 있음
const elem = document.createElement('c-element'); // 새로운 태그 생성
const app = document.getElementById('app')
console.log(elem)

app.appendChild(elem) // append도 가능함
