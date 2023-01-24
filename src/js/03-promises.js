const { delay } = require('lodash');

const formEl = document.querySelector('.form');

formEl.addEventListener('input', inputF);
formEl.addEventListener('submit', submitF);
console.log(formEl);
function inputF(e) {
  console.log(e.target);
}
function submitF(e) {
  e.preventDefault();
  const {
    elements: { delay, step, amount },
  } = e.target;

    console.log(+delay.value, +step.value);
}

function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  if (shouldResolve) {
    // Fulfill
    resolve('success value');
  } else {
    // Reject
    reject('error');
  }
}
