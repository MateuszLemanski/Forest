const footerYear = document.querySelector('.present-year');
const clearBtn = document.querySelector('.clear-btn');
const firstName = document.querySelector('#name');
const surname = document.querySelector('#surname');
const email = document.querySelector('#email');
const msg = document.querySelector('#msg');
const formFields = [firstName, surname, email, msg];

const handleNewYear = () => {
    const year = new Date().getFullYear();
    footerYear.innerText = year;
}

const clearForm = () => {
    formFields.forEach(element => element.value = '')
}

handleNewYear();
clearBtn.addEventListener('click', clearForm);