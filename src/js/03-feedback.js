import throttle from 'lodash.throttle';
import { save, load } from './localstorage';
const formEl = document.querySelector('.feedback-form');
const submit = formEl.querySelector('button');
const inputEl = formEl.querySelector('input');
const textareaEl = formEl.querySelector('textarea');
const LocalObject = {};
updateText();

formEl.addEventListener('input', throttle(dataToLocal, 1000));
submit.addEventListener('click', submitData);

function dataToLocal(event) {
  const { name, value } = event.target;
  LocalObject[name] = value;
  console.log('🚀 ~ LocalObject', LocalObject);
  localStorage.setItem('feedback-form-state', JSON.stringify(LocalObject));
}
function submitData(event) {
  console.log(event.target);
}

function updateText() {
  const load = localStorage.getItem('feedback-form-state');
  const parceLoad = JSON.parse(load) || '';
  inputEl.value = parceLoad.email;
  textareaEl.value = parceLoad.message;
}
