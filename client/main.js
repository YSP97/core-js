/* global gsap */

import {
  tiger,
  delayP,
  getNode,
  changeColor,
  renderSpinner,
  renderUserCard,
  renderEmptyCard,
  clearContents,
} from './lib/index.js';

const ENDPOINT = 'http://localhost:3000/users';

// 1. user 데이터 fetch 해주세요.
//    - tiger.get

// 2. fetch 데이터의 유저 이름만 콘솔 출력
//     - 데이터 유형 파악  ex) 객체,배열,숫자,문자
//     - 적당한 메서드 사용하기

// 3. 유저 이름 화면에 렌더링

const userCardInner = getNode('.user-card-inner');

async function renderUserList() {
  // 로딩 스피너 렌더링
  renderSpinner(userCardInner);

  // await delayP(2000);

  try {
    // getNode('.loading-spinner').remove();
    gsap.to('.loadingSpinner', {
      opacity: 0,
      onCompleate(t) {
        console.log(this._targets);
        this._targets[0].remove(); // this는  twin(내 애니메이션) 객체 반환, _targets: figure.loadingSpinner
      },
    });

    const response = await tiger.get(ENDPOINT);

    const data = response.data;

    data.forEach((user) => renderUserCard(userCardInner, user));

    changeColor('.user-card');

    gsap.from('.user-card', {
      x: -100,
      opacity: 0,
      stagger: {
        amount: 1,
        from: 'start',
      },
    });
  } catch {
    console.error('에러가 발생했습니다!');
    renderEmptyCard(userCardInner);
  }
}

renderUserList();

function handleDeleteCard(e) {
  const btn = e.target.closest('button');
  if (!btn) return;

  const article = btn.closest('article');

  const index = article.dataset.index.slice(5);

  tiger.delete(`${ENDPOINT}/${index}`).then(() => {
    // 요청보내고 렌더링하기
    clearContents(userCardInner); // 기존의 렌더링된 것 싹 다 날리고
    renderUserList(); // 다시 렌더링하기
  });
}

userCardInner.addEventListener('click', handleDeleteCard);

const doneBtn = getNode('.done');
const createBtn = getNode('.create');
const cancelBtn = getNode('.cancel');

function handleCreate() {
  gsap.to('.pop', { autoAlpha: 1 });

  // js로 하는법
  // getNode('.pop').style.visibility = 'initial';

  // setInterval(() => {
  //   getNode(('.pop'.style.opacity = 0));
  // });
}

function handleCancel(e) {
  e.stopPropagation(); // 크리에이트 버튼이 가장 상위 즉 버블링 발생 -> 따라서 취소 클릭을 하면 크리에이트 버튼돟 클릭됨 -> 버블링 멈추는 메서드 써줌, 버블링을 막는 건 신중해야 함 보통 팝업창에 사용
  gsap.to('.pop', { autoAlpha: 0 });
}

function handleDone(e) {
  e.preventDefault(); // 생성버튼이 submit이라 기본적으로 제출하는 동작을 함 -> 이를 막기 위한 메서드 사용
  const name = getNode('#nameField').value;
  const email = getNode('#emailField').value;
  const website = getNode('#siteField').value;

  tiger.post(ENDPOINT, { name, email, website }).then(() => {
    // 1. 팝업 닫기
    gsap.to('.pop', { autoAlpha: 0 });
    // 2. 컨텐츠 비우기
    clearContents(userCardInner);
    // 3. 유저카드 렌더링
    renderUserList();
  });
}

cancelBtn.addEventListener('click', handleCancel);
createBtn.addEventListener('click', handleCreate);
doneBtn.addEventListener('click', handleDone);
