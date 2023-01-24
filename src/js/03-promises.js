import Notiflix from 'notiflix';

const formEl = document.querySelector('.form');

formEl.addEventListener('submit', submitData);

function submitData(e) {
  e.preventDefault();
  const {
    elements: { delay, step, amount },
  } = e.target;
  for (let i = 1; i <= +amount.value; i += 1) {
    const stepForPromise = +delay.value + +step.value * (i - 1);
    setTimeout(() => {
      createPromise(i, stepForPromise)
        .then(({ position, delay }) => {
          Notiflix.Notify.success(
            `✅ Fulfilled promise ${position} in ${delay}ms`
          );
        })
        .catch(({ position, delay }) => {
          Notiflix.Notify.failure(
            `❌ Rejected promise ${position} in ${delay}ms`
          );
        });
    }, stepForPromise);
  }
  e.currentTarget.reset();
}

function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    const objectForPromise = { position, delay };
    const shouldResolve = Math.random() > 0.3;
    if (shouldResolve) {
      // Fulfill
      resolve(objectForPromise);
    } else {
      // Reject
      reject(objectForPromise);
    }
  });
}
