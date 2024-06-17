/* ----------------------------- */
/* Prototype and inheritance     */
/* ----------------------------- */

// 프로토타입 상속(prototypal inheritance)을 사용하여 객체를 확장합니다.
//                                              동물
//                                             (상속)
// 여러가지 동물들을 키우는 게임 : 고양이,강아지,호랑이,사자,늑대,여우
// Object.create(null): 최상위에 Object.prototype이 없음

// 객체의 프로토타입 [[Prototype]] => __proto__로 접근
const animal = {
  legs: 4,
  tail: true,
  stomach: [],
  set eat(food){ // setter 지시자: set
    this.stomach.push(food)
  },
  get eat(){ // getter 지시자 get
    return this.stomach
  }
}
// animal.setEat('고기')
// get, set을 사용할 때는 객체의 프로퍼티처럼 사용해야함
animal.eat = '고기' // setter
animal.eat // getter




const tiger = {
  pattern: '호랑이무늬',
  hunt(target){
    this.prey = target;
    return `${target}에 조용히 접근한다`
  },
  __proto__: animal
}

const 백두산호랑이 = {
  color: 'white',
  name: '백돌이',
  __proto__: tiger
}


// 생성자 함수


function Animal() {
  this.legs = 4;
  this.tail = true;
  this.stomach = [];
  this.getEat = function () {
    return this.stomach;
  };
  this.setEat = function (food) {
    this.stomach.push(food);
  };
}

const a1 = new Animal();

// 인스턴스 메서드와 스태틱 메서드
// 인스턴스 메서드: 생성되어야만 쓸 수 있는 메서드
// 스태틱 메서드: 생성되지 않아도 사용할 수 있는 메서드
function Tiger(name){
  Animal.call(this); // this: Tiger를 통해 생성된 인스턴스를 Animal의 this에 바인딩하겠다라는 뜻ㅎ
  this.name = name;
  this.pattern = '호랑의무늬',
  this.hunt = function(target){ // 금강산호랑이라는 인스턴스만 쓸 수 있는 메서드 이런 메서드를 인스턴스 메서드라고 함!
    return `${target}에게 조용히 접근한다.`
  }
  
}

// static method 정의 -> Object.keys()
Tiger.bark = function (sound){
  return sound
}

// Tiger.prototype = a1 // 상속받을 부모로 생성한 인스턴스에 연결해야함
// 함수로 연결하는 것은 말이 안되니까

const 금강산호랑이 = new Tiger('금순이');


/* 함수의 메서드(함수의 능력) */
// call: this와 인수를 전달하여 함수를 실행 -> this를 지정하고 싶을때 사용(this의 동적 변경)
// apply: call과 같은 기능을 함 (this, [...인자들])
// bind: this, 인수를 전달하는 함수를 만든다. 즉시 실행하지 않음

// throttle, debounce -> 나중에 배울때 call, apply가 쓰인다고 함...





function sum(a, b, c){
  console.log(this);
  return a + b + c
}

// sum.call('hello'); // this: 'hello'로 설정
// sum(); // this: window
// sum.call('hello', 1, 2, 3) // (this, ...인자들) this를 전달함, 인수를 개별로 받음
// sum.apply('hello', [1,2,3]); // this를 전달함, 인수를 배열로 받음
const b = sum.bind('hello', 1, 2, 3); // this를 전달함, 인수를 개별로 받음 => 함수실행 안함
const user = {
  sayHi(){
    function sayBye(){
      console.log(this); // this: window
    }
    // sayBye.call(this) -> this: user
  }
}

user.sayHi();