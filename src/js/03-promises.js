import Notiflix from 'notiflix';

const refs = {
  form: document.querySelector('.form'),
  delay: document.querySelector('input[name="delay"]'),
  step: document.querySelector('input[name="step"]'),
  amount: document.querySelector('input[name="amount"]'),
};

refs.form.addEventListener('submit', onSubmirBtnClick);

function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    const shouldResolve = Math.random() > 0.3;
    if (shouldResolve) {
      resolve({ position, delay });
    } else {
      reject({ position, delay });
    }
  });
}

function onSubmirBtnClick(event) {
  event.preventDefault();

  const firstDelay = Number(refs.delay.value);
  const step = Number(refs.step.value);
  const amount = Number(refs.amount.value);
  let delay = firstDelay;
  for (let i = 1; i <= amount; i++) {
    delay += step;
    setTimeout(() => {
      createPromise(i, delay)
        .then(({ position, delay }) =>
          console.log(`✅ Fulfilled promise ${position} in ${delay} ms`),
        )
        .catch(({ position, delay }) =>
          console.log(`❌ Rejected promise ${position} in ${delay} ms`),
        );
    }, delay);
  }
}

// ======================================================================

// Notiflix.Notify.success
// Notiflix.Notify.failure;
// function createPromise(position, delay) {
//   event.preventDefault();
//   const amount = Number(refs.amount.value);

//   for (let i = 1; i <= amount; i++) {
//     const step = Number(refs.step.value);
//     const firstDelay = Number(refs.delay.value);
//     delay = firstDelay;

//     const shouldResolve = Math.random() > 0.3;

//     new Promise((resolve, reject) =>
//       setTimeout(() => {
//         if (shouldResolve) {
//           resolve(i, delay);
//         } else {
//           reject(i, delay);
//         }
//       }, delay),
//     )
//       .then((position, delay) => console.log(`✅ Fulfilled promise ${position} in ${delay} ms`))
//       .catch(position => console.log(`❌ Rejected promise ${position} in ${delay} ms`));
//     // delay += step;
//   }
// }
// ===============================================================================
