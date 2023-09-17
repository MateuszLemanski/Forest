const footerYear = document.querySelector('.present-year');
const clearBtn = document.querySelector('.clear-btn');
const firstName = document.querySelector('#name');
const surname = document.querySelector('#surname');
const email = document.querySelector('#email');
const msg = document.querySelector('#msg');
const formFields = [firstName, surname, email, msg];

let section = document.querySelectorAll('section')
let navLinks = document.querySelectorAll('.nav__ul a')

// const nav = document.querySelector('.nav__ul');

window.onscroll = () => {
    section.forEach(sec => {
        let top = window.scrollY
        let offset = sec.offsetTop
        let height = sec.offsetHeight
        let id = sec.getAttribute('id')

        if(top >= offset && top < offset + height){
            navLinks.forEach(links => {
                links.classList.remove('active')
                document.querySelector('.nav__ul a[href*=' + id + ']').classList.add('active')
            })
        }
    })
}




const handleNewYear = () => {
    const year = new Date().getFullYear();
    footerYear.innerText = year;
}

const clearForm = () => {
    formFields.forEach(element => element.value = '')
}

handleNewYear();
clearBtn.addEventListener('click', clearForm);