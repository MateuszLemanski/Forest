const footerYear = document.querySelector('.present-year');


const handleNewYear = () => {
    const year = new Date().getFullYear();
    footerYear.innerText = year;
}


handleNewYear();