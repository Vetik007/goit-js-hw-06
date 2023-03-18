
const form = document.querySelector('.login-form');

form.addEventListener('submit', onFormSubmit);

function onFormSubmit(event) {
    
    event.preventDefault();

    const inputs = document.querySelectorAll('input');

inputs.forEach(fieldImput => {
    if (fieldImput.value.trim() === '') {
        alert("Error. Please fill all fields!");
    }
});
  
    const formElements = event.currentTarget.elements;
    const mail = formElements.email.value;
    const password = formElements.password.value;

    const formData = {
        mail,
        password,
    };

    console.log(formData);

  form.reset();
    
};
