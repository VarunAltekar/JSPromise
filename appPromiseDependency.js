function iRunFirst() {
  return new Promise((resolve, reject) => {
    resolve("Your cat is ");
  });
}

function waitingFor(data) {
  return new Promise((resolve, reject) => {
    resolve(data + "awesome");
  });
}

iRunFirst()
  .then(message => {
    return waitingFor(message);
  })
  .then(message => {
    console.log(message);
  });
