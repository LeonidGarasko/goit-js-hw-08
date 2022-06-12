import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
let data = {
    email: '',
    message: ''
};

const saveMessageObject =  JSON.parse(localStorage.getItem("feedback-form-state"))
if (saveMessageObject) {
    data.email = saveMessageObject.email;
    data.message = saveMessageObject.message;
}

form.querySelector('[name="email"]').value = data.email;
form.querySelector('[name="message"]').value = data.message;

form.addEventListener('input', throttle(onFormInput, 500));
form.addEventListener('submit', onFormSubmit);

function onFormInput(e) {
    data[e.target.name] = e.target.value;
    localStorage.setItem("feedback-form-state", JSON.stringify(data));
}
function onFormSubmit(e) {
    e.preventDefault();

    console.log(JSON.parse(localStorage.getItem("feedback-form-state")));

    localStorage.clear();
    e.target.reset();
    data.email = '';
    data.message = '';
}