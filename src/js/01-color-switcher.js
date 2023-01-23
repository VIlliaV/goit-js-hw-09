const bodyEl = document.querySelector('body');
const buttonStart = bodyEl.querySelector('button[data-start]');
const buttonStop = bodyEl.querySelector('button[data-stop]');

buttonStop.disabled = true;

buttonStart.addEventListener('click', startChangeBackColor);

function startChangeBackColor() {
  buttonStart.disabled = true;
  buttonStop.disabled = false;
  buttonStop.addEventListener('click', stopChangeBackColor);
  buttonStart.removeEventListener;
  const timeForChange = setInterval(changeColor, 1000);
}

function stopChangeBackColor() {
  buttonStart.disabled = false;
  buttonStop.disabled = true;
  buttonStart.addEventListener('click', startChangeBackColor);
  buttonStop.removeEventListener;
}

function changeColor() {
  console.log('r');
}
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

