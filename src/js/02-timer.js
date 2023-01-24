import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import Notiflix from 'notiflix';

const inputEl = document.getElementById('datetime-picker');
const buttonEl = document.querySelector('button');
const divEl = document.querySelector('.timer');
const dataDays = divEl.querySelector('[data-days]');
const dataHours = divEl.querySelector('[data-hours]');
const dataMinutes = divEl.querySelector('[data-minutes]');
const dataSeconds = divEl.querySelector('[data-seconds]');
let timeToEnd = 0;
Notiflix.Notify.init({
  position: 'center-bottom',
  width: '280px',
  distance: '250px',
  cssAnimationStyle: 'from-bottom',
  cssAnimationDuration: 1000,
});
const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    timeToEnd = selectedDates[0].getTime() - options.defaultDate.getTime();

    if (timeToEnd > 0) {
      buttonEl.disabled = false;
    } else {
      buttonEl.disabled = true;
      Notiflix.Notify.failure('Please choose a date in the future');
    }
  },
  onOpen() {
    options.defaultDate = new Date();
    if ((timeToEnd = 0)) {
      clearInterval(timerID);
    }
  },
};

const fp = flatpickr(inputEl, options);

buttonEl.disabled = true;

buttonEl.addEventListener('click', startTimer);

function startTimer() {
  Notiflix.Notify.success('TIMER STARTED');
  buttonEl.removeEventListener;
  buttonEl.disabled = true;
  changeText();
  const timerID = setInterval(() => {
    timeToEnd -= 1000;
    if (timeToEnd <= 0) {
      timeToEnd = 0;
      clearInterval(timerID);
      Notiflix.Notify.info('THE END)))');
    }
    changeText();
  }, 1000);
}

function changeText() {
  const { days, hours, minutes, seconds } = convertMs(timeToEnd);

  dataDays.textContent = addLeadingZero(days);
  dataHours.textContent = addLeadingZero(hours);
  dataMinutes.textContent = addLeadingZero(minutes);
  dataSeconds.textContent = addLeadingZero(seconds);
}

function convertMs(ms) {
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;
  const days = Math.floor(ms / day);
  const hours = Math.floor((ms % day) / hour);
  const minutes = Math.floor(((ms % day) % hour) / minute);
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

function addLeadingZero(value) {
  return value.toString().padStart(2, '0');
}
