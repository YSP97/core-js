const aList = document.querySelectorAll('nav a');
const depthList = document.querySelectorAll('.depth');
const header = document.querySelector('#header');

const h = (t) => (t.style.height = 0);

// 이 방법은 매개변수 하나만 전달 가능
// depthList.forEach(console.log) // depthList.forEach(item => console.log(item))
// depthList.forEach(h)

aList.forEach((a) => {
  a.addEventListener('mouseenter', () => {
    const target = a.lastElementChild;

    // 모든 depth의 높이를 0으로 만들어 줘야함
    depthList.forEach(h);
    target.style.height = '100px';
  });


});

header.addEventListener('mouseleave', () => depthList.forEach(h));
