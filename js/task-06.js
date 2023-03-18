
const refInput = document.getElementById("validation-input");

refInput.onblur = function () {
    console.log('Количество введенных символов в input:', this.value.length);

  if (this.getAttribute('data-length') > this.value.length) {
    this.classList.remove('valid');
    this.classList.add('invalid');
  } else {
    this.classList.remove('invalid');
    this.classList.add('valid');
  }
};









