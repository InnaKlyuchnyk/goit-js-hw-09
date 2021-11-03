function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const INTERVAL_TIME = 1000;
const refs = {
  body: document.querySelector('body'),
  startBtn: document.querySelector('button[data-start]'),
  stopBtn: document.querySelector('button[data-stop]'),
};
let timerId = null;

refs.startBtn.addEventListener('click', onStartBtnClick);
refs.stopBtn.addEventListener('click', onStopBtnClick);
refs.stopBtn.setAttribute('disabled', 'true');

function onStartBtnClick() {
  timerId = setInterval(() => {
    refs.body.style.backgroundColor = getRandomHexColor();
    console.log(refs.body.style.backgroundColor);
  }, INTERVAL_TIME);

  refs.startBtn.setAttribute('disabled', 'true');
  refs.stopBtn.removeAttribute('disabled');
}

function onStopBtnClick() {
  clearInterval(timerId);

  refs.stopBtn.setAttribute('disabled', 'true');
  refs.startBtn.removeAttribute('disabled');
}
