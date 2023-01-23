const bodyEl = document.querySelector('body');
const buttonStart = bodyEl.querySelector('button[data-start]');
const buttonStop = bodyEl.querySelector('button[data-stop]');
let timeForChange = null;
buttonStop.disabled = true;

buttonStart.addEventListener('click', startChangeBackColor);

function startChangeBackColor() {
  bodyEl.style.backgroundColor = getRandomHexColor();
  buttonStart.disabled = true;
  buttonStop.disabled = false;
  buttonStop.addEventListener('click', stopChangeBackColor);
  buttonStart.removeEventListener;
  timeForChange = setInterval(
    () => (bodyEl.style.backgroundColor = getRandomHexColor()),
    1000
  );
}

function stopChangeBackColor() {
  buttonStart.disabled = false;
  buttonStop.disabled = true;
  buttonStart.addEventListener('click', startChangeBackColor);
  buttonStop.removeEventListener;
  clearInterval(timeForChange);
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
