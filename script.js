const converter = document.querySelector('#converter');
const result = document.querySelector('.result');
const convBtn = document.querySelector('.conv');
const resetBtn = document.querySelector('.reset');
const changeBtn = document.querySelector('.change');
const one = document.querySelector('.one');
const two = document.querySelector('.two');

// T(F) = T(C) * 1.8 + 32
// T(C) = (T(F) - 32) / 1.8
let temp;

const changeSpan = () => {
  if (one.textContent === '°C') {
    one.textContent = '°F';
    two.textContent = '°C';
    result.textContent = '';
  } else {
    one.textContent = '°C';
    two.textContent = '°F';
    result.textContent = '';
  }
};

const toFahr = () => {
  temp = converter.value * 1.8 + 32;
  result.textContent = `${converter.value}°C = ${temp.toFixed(1)}°F`;
  converter.value = '';
};

const toCelc = () => {
  temp = (converter.value - 32) / 1.8;
  result.textContent = `${converter.value}°F = ${temp.toFixed(1)}°C`;
  converter.value = '';
};

const conversion = () => {
  if (converter.value !== '') {
    if (one.textContent === '°C') {
      toFahr();
    } else {
      toCelc();
    }
  } else {
    result.textContent = 'Value needed';
  }
};

const reset = () => {
  converter.value = '';
  result.textContent = '';
  resetBtn.classList.toggle('reset-click');
};

changeBtn.addEventListener('click', changeSpan);
convBtn.addEventListener('click', conversion);
resetBtn.addEventListener('click', reset);
