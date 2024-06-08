/* ------------------ */
/* Variables          */
/* ------------------ */
/* 
let admin;
let name;

name = 'John';

admin = name;

alert(admin);

let ourPlanetName = 'earth';
let currentUserName = 'Yunseon'; */

/* 다음 내용을 분석한 후, 프로그래밍 할 수 있도록 변수와 상수를 작성해봅니다. ----------- */

// - 갯수 별 상품 가격 계산하기

const productPriceList = [5000, 3000, 1000];
const productNumList = [3, 5, 1];
let priceSum = 0;

for (let i = 0; i < productPriceList.length; i++) {
  let priceByNum = productPriceList[i] * productNumList[i];
  priceSum += priceByNum;
}

console.log(priceSum);

// - 구매 제품 가격의 총 합
let priceTotalSum;
// - 1년 기준 일(day)자 수
let totalProductPrice;

// - 구매 결제 여부
let isPayment = false;
let hasChartList = false;
// - 구매 결제 내역
let paymentList;

// - 브랜드 접두사
const BRAND_PREFIX = 'Stussy';
// - 오늘의 운세
let todayFortune = 'very good';
// - 상품 정보
const productInfo = '품절';

/* variables ----------------------------------------------------------- */

/* constant variables -------------------------------------------------- */
