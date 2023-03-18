const ref = {
  boxes: document.getElementById('boxes'),
  input: document.querySelector('input[type="number"]'),
  createBtn: document.querySelector('button[data-create]'),
  destroyBtn: document.querySelector('button[data-destroy]'),
 }

const boxesMarkup = (index) => `<div class="item"
 style="width: ${30 + 10 * index}px; height: ${30 + 10 * index}px; background-color: ${getRandomHexColor()}"></div>`

const boxesMarkupList = (amount) => Array(amount).fill('').map((_, i) => boxesMarkup(i)).join('')

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

ref.createBtn.addEventListener('click', ClickCreate);
ref.destroyBtn.addEventListener('click', ClickDestroy);

function ClickCreate() {
  destroyBoxes()
  createBoxes(Number(ref.input.value))
  }

function ClickDestroy() {
  destroyBoxes();
}

function createBoxes(amount) {
  ref.boxes.insertAdjacentHTML('afterbegin', boxesMarkupList(amount));
}

function destroyBoxes() {
  ref.boxes.innerHTML = '';
}
