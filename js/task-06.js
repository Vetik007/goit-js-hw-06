
const refInput = document.getElementById("validation-input");

refInput.onblur = function (event) {
    console.log('Количество введенных символов в input:', refInput.value.length);

  if (event.target.value.length === Number(refInput.dataset.length)) {
    refInput.classList.add('valid');
    if (refInput.classList.contains('invalid')) {
refInput.classList.remove('invalid');
    }
    
  } else {
    		if (refInput.classList.contains('valid')) {
			refInput.classList.remove('valid')
		}
		refInput.classList.add('invalid')
  }
};







