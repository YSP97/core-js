/* ------------------------------ */
/* Browser Object Model           */
/* ------------------------------ */

/*
JavaScript가 작동하는 플랫폼은 호스트(host)라고 불립니다. 
호스트는 브라우저, 웹서버, 심지어는 커피 머신이 될 수도 있습니다. 

각 플랫폼은 해당 플랫폼에 특정되는 기능을 제공하는데, JavaScript 명세서에는 
이를 호스트 환경(host environment) 이라고 부릅니다.

호스트 환경은 JavaScript 코어에 더해 플랫폼에 특정되는 객체와 함수를 제공합니다. 
웹 브라우저는 웹 페이지를 제어하기 위한 수단을 제공하고, Node.js는 서버를 포함해 
애플리케이션 개발에 필요한 다양한 기능을 제공합니다.

브라우저 객체 모델(Browser Object Model, BOM)은 문서 이외의 모든 것을 
제어하기 위해 브라우저(호스트 환경)가 제공하는 추가 객체를 나타냅니다.
*/

/* Window 객체 ----------------------------------------------------------- */

const { alert, confirm, prompt, setTimeout, setInterval } = window;

/* Location 객체 --------------------------------------------------------- */
// http://localhost:5500/index.html?type=listing&page=2#title

const { href, protocol, host, port, search, hash, replace, reload } = location; // window.location

const urlParams = new URLSearchParams(location.search);

// for (const [key, value] of urlParams) {
//   console.log(`${key}:${value}`);
// }

/* Navigator 객체 -------------------------------------------------------- */

// 비동기(<promise>객체면 비동기 함수임)로 실행되고 있어서(navigator.geolocation.getCurrentPosition가 느려서) return값이 없어짐
// 안쪽 geo값을 바로 할당하도록 하자 -> 콜백함수 이용
function getGeolocation(success) {
  navigator.geolocation.getCurrentPosition((data) => {
    // 비동기 동작 함수임
    if (data) {
      const { latitude: lat, longitude: long } = data.coords;
      const geo = { lat, long };
      success(geo); // 값을 가져오자마자 바로 함수 돌려버림 코드 실행을 시켜서 비동기 함수가 느려도 값을 가져올 수 있게 된다.
    } else {
      console.error('위치 서비스 동의 하세요');
    }
  });
}

getGeolocation((data) => {
  console.log(data);
}); // {lat:37.15, long:23234....}

// promise 사용한 예시
function getGeolocation2() {
  return new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition((data) => {
      if (data) {
        const { latitude: lat, longitude: long } = data.coords;
        const geo = { lat, long };
        resolve(geo);
      } else {
        reject({ message: '위치 서비스 동의 하세요' });
      }
    });
  });
}

getGeolocation2().then((res) => console.log(res));

// navigator.mediaDevices.getUserMedia({ video: true });

const { platform, userAgent, language, onLine, geolocation } = navigator;
navigator.geolocation.getCurrentPosition((data) => {
  if (data) {
    const { latitude: lat, longitude: long } = data.coords;
    console.log(lat, long);
  } else {
    console.error('위치 서비스 동의 하세요');
  }
});

/* Screen 객체 ----------------------------------------------------------- */

const { width, height, availWidth, availHeight, orientation } = screen;

/* History 객체 ---------------------------------------------------------- */

const { back, forward, go, length, pushState, replaceState } = history;

const user = {
  total: 0,
  incre: (it) => {
    this.total += it;
  },
};
user.incre(5);
console.log(user.total);
const total = user.incre;
