import { isString } from './type.js';

const { localStorage: storage } = window;

// localStorage.setItem('user', JSON.stringify(user)); // 브라우저 서버는 데이터 문자로만 받아서 문자열로 변환

export function setStorage(key, value) {
  return new Promise((resolve, reject) => {
    // 데이터를 가져오는 데 걸리는 시간에 대한 위험성을 줄이기 위해 pomise 사용
    if (isString(key)) {
      storage.setItem(key, JSON.stringify(value));
      resolve();
    } else {
      reject();
    }
  });
}

// setStorage('user', user)

// const data = JSON.parse(localStorage.getItem('user')); // 문자열로 반환받아서 데이터를 객체로 받으려면 parse 메서드 사용해야함

export function getStorage(key) {
  return new Promise((resolve, reject) => {
    if (isString(key)) {
      resolve(JSON.parse(storage.getItem(key)));
    } else {
      reject();
    }
  });
}

export function deleteStorage(key) {
  return new Promise((resolve, reject) => {
    !key ? storage.clear() : storage.removeItem(key);
    resolve();
  });
}
