/* ----------------------------- */
/* Classes                       */
/* ----------------------------- */

// 앞서 함수로 정의한 내용들을 class문법을 사용해 재정의 합니다.

// 오늘 배운 거
// 1. 객체의 상속
// 2. 생성자 함수의 상속
// 3. 생성자 함수 모던 방식 class


class Animal {
  legs = 4 // name에 의해 변경되지 않는 값을 정의하려고 밖에 쓸 수도 있음 
  tail =true
  
  constructor(name){
    this.name = name;
    this.stomach = []
  }
  get eat(){
    return this.stomach
  }

  set eat(food){
    this.stomach.push(food)
  }
}

const a = new Animal('포동이');
console.log(a);


class Tiger extends Animal{ // 상속받음
  constructor(name){
    super(name); // Animal.call(this)같은 일...-> name 설정은 부모의 것이라 super(name)으로 call하는 역할을 함 -> Animal(부모)의 constructor을 불러오는 것
    this.pattern = '호랑이무늬'
  }

  static options = {
    version: '1.10.0',
    company: '8b-studio',
    ceo: '박윤선'
  }

  static bark(sound){ // 스테틱 메서드
    return sound
  }
  hunt(target){ // 인스터스 메서드
    return `${target}에게 조용히 접근한다.`
  }
}

const 호랑이 = new Tiger('호돌이');

class Todo {
  target = null;
  registerButton = null;
  list = null;

  constructor({ input, button, renderPlace }) {
    this.target = document.querySelector(input);
    this.registerButton = document.querySelector(button);
    this.list = document.querySelector(renderPlace);
    this.todoListArray = [];
    this.data;

    this.registerEvent();

    this.target.addEventListener('input', () => {
      this.data = this.currentInputTodoData;
    });
  }

  get currentInputTodoData() {
    return this.target.value;
  }

  set currentInputTodoData(value) {
    this.target.value = value;
  }

  get todoList() {
    return this.todoListArray;
  }

  set todoList(value) {
    this.todoList.push(value);
  }

  #createList() {
    let template = `
      <li>${this.data}</li>
    `;
    return template;
  }

  render() {
    this.list.insertAdjacentHTML('beforeend', this.#createList());
    this.target.value = '';
  }

  addTodoData() {
    this.todoList = this.data;
  }

  registerEvent() {
    this.registerButton.addEventListener('click', () => {
      this.addTodoData();
      this.render();
    });
  }
}

const button = new Todo({
  input: '#todo',
  button: '.register',
  renderPlace: '.todoList',
});

const button2 = new Todo({ // 클래스 재사용 가능
  input: '#todo2',
  button: '.register2',
  renderPlace: '.todoList2',
});