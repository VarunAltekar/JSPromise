const task1CallToDb = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("Taking its own sweet time");
    resolve("Task1 Completed");
  }, 5000);
});

const task2 = new Promise((resolve, reject) => {
  resolve("Task2 Completed");
});

const task3 = new Promise((resolve, reject) => {
  resolve("Task3 Completed");
});

/* 
    Creates a Promise that is resolved with an array of results when all of the provided Promises resolve,
    or rejected when any Promise is rejected.
*/
Promise.all([task1CallToDb, task2, task3]).then(messages => {
  console.log(messages);
});

/* 
    Creates a Promise that is resolved or rejected when any of the provided Promises are resolved or rejected.
*/

Promise.race([task1CallToDb, task2, task3]).then(messages => {
  console.log(messages);
});
