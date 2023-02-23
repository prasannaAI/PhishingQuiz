const dropdownArrows = document.querySelectorAll('.email-dropdown-arrow, .details-link');
const dropdown = document.querySelector('.email-dropdown');

dropdownArrows.forEach(item => item.addEventListener('click', () => dropdown.classList.toggle('show')));

document.addEventListener('click', (event) => {
    if (![...dropdownArrows].includes(event.target) && !dropdown.contains(event.target))
        dropdown.classList.remove('show');
})