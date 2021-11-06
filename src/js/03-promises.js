const refs = {
  form: document.querySelector('.form'),
  delay: document.querySelector('input[name="delay"]'),
  step: document.querySelector('input[name="step"]'),
  amount: document.querySelector('input[name="amount"]'),
};

refs.form.addEventListener('submit', createPromise);
let position = 0;

function createPromise(position, delay) {
  event.preventDefault();
  const amount = refs.amount.value;
  const step = refs.step.value;
  const firstDelay = refs.delay.value;

  const shouldResolve = Math.random() > 0.3;

  for (let i = 0; i <= amount; i += 1) {
    position = i;
    console.log(position);
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (shouldResolve) {
          resolve({ position, delay });
        } else {
          reject({ position, delay });
        }
      }, delay);
    })
      .then(() => {
        console.log(`✅ Fulfilled promise ${position} in ${delay} ms`);
      })
      .catch(() => {
        console.log(`❌ Rejected promise ${position} in ${delay} ms`);
      });
  }
}

// createPromise(2, 1500)
//   .then(({ position, delay }) => {
//     console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
//   })
//   .catch(({ position, delay }) => {
//     console.log(`❌ Rejected promise ${position} in ${delay}ms`);
//   });

// function createPrimise() {
//   event.preventDefault();
//   const firstDelay = refs.delay.value;
//   const amount = refs.amount.value;
//   const step = refs.step.value;
//   let delay = firstDelay;
//   const shouldResolve = Math.random() > 0.3;

//   for (let i = 1; i <= amount; i += 1) {
//     const position = i;
//     return new Promise((resolve, reject) => {
//       setTimeout(() => {
//         if (shouldResolve) {
//           resolve(i`✅Fulfilled promises ${position} in ${delay} ms`);
//         } else {
//           reject(i`❌Rejected promises ${position} in ${delay} ms`);
//         }
//       }, delay);
//     })
//       .then(v => console.log(v))
//       .catch(error => console.log(error));
//   }
// }
