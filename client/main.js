import { xhrPromise } from './lib/index.js';

const getData = async () => {
  const data = await xhrPromise.get(
    'https://jsonplaceholder.typicode.com/users'
  );

  data.forEach((item) => {
    console.log(item);
  });
  console.log(data);
};

// getData();
