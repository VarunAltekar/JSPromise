// 1.
let userLeft = false;
let watchingCatMemes = true;

const promiseWatchTutorial = new Promise((resolve, reject) => {
  // 2.
  if (userLeft) reject("User Left");
  else if (watchingCatMemes) reject("watching cat memes");
  else resolve("Please subscribe");
});

// 2.
function watchTutorialPromise() {
  return new Promise((resolve, reject) => {
    if (userLeft)
      reject({
        name: "User Left",
        message: "User is bored"
      });
    else if (watchingCatMemes)
      reject({
        name: "Watching Cat memes",
        mesage: "Watching Memes < Tutorials"
      });
    else resolve("Please subscribe");
  });
}

// 3.
promiseWatchTutorial.then(
  message => {
    console.log(message);
  },
  message => {
    console.log(message);
  }
);

// 3.
watchTutorialPromise().then(
  message => {
    console.log(message);
  },
  message => {
    console.log(message);
  }
);
