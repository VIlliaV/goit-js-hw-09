import throttle from 'lodash.throttle';
import { save, load, remove } from './localstorage';
const formEl = document.querySelector('.feedback-form');
const inputEl = formEl.querySelector('input');
const textareaEl = formEl.querySelector('textarea');
const LOCAL_PLACE = 'feedback-form-state';
const localObject = load(LOCAL_PLACE) || { message: '', email: '' };
updateText();

formEl.addEventListener('input', throttle(dataToLocal, 500));
formEl.addEventListener('submit', submitData);

function dataToLocal(event) {
  const { name, value } = event.target;
  localObject[name] = value;
  save(LOCAL_PLACE, localObject);
}

function submitData(event) {
  event.preventDefault();
  if (inputEl.value === '' || textareaEl.value === '') {
    alert('заповніть пусті строки');
  } else {
    remove(LOCAL_PLACE);
    event.currentTarget.reset();
    console.log(localObject);
  }
}

function updateText() {
  inputEl.value = localObject.email;
  textareaEl.value = localObject.message;
  // }
}
