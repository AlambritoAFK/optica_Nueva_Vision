document.addEventListener('DOMContentLoaded', () => {
    
    const toggleNav = document.querySelector('.toggle__nav');
    const barraNav = document.querySelector('.barra__nav');

    toggleNav.addEventListener('click', () => {
        barraNav.classList.toggle('activo');
    });
});