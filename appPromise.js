const promiseAddIntegers = new Promise((resolve, reject) => {
  // 1. define here what the promise is ???
  //    our promise adds 2 integers
  let sum = 1 + 1;

  // 2.  verify if promise if resolved or rejected
  if (sum == 2) resolve("Promise fulfilled");
  else reject("Promise Rejected");
});

// 3.   execute Promise ()
promiseAddIntegers.then(
  message => {
    console.log("Yeah : " + message);
  },
  message => {
    console.log("Oh no : " + message);
  }
);
