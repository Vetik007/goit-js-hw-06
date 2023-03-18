function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const ref = {
  colorGenerationBtn: document.querySelector('.change-color'),

spanColor: document.querySelector('.color'),

};

ref.colorGenerationBtn.addEventListener('click', colorClickBtn);
  
function colorClickBtn () {

  document.body.style.backgroundColor = getRandomHexColor();
  
  ref.spanColor.textContent = getRandomHexColor();

};
  
