document.addEventListener('DOMContentLoaded', () => {
    const mobileMenuIcon = document.querySelector('.mobile-menu-icon button');
    const mobileMenu = document.querySelector('.mobile-menu');

    mobileMenuIcon.addEventListener('click', () => {
        // Alterna a classe "show" para mostrar/ocultar o menu lateral
        mobileMenu.classList.toggle('show');
    });
});