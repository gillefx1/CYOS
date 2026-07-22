document.addEventListener('DOMContentLoaded', () => {
    const burger = document.querySelector('.burger-menu');
    const navLinks = document.querySelector('.nav-links');
    const dropdownToggle = document.querySelector('.dropdown-toggle');
    const dropdown = document.querySelector('.mobile-click');

    // Ouverture/Fermeture du menu burger principal
    burger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        burger.classList.toggle('toggle');
    });

    // Gestion du sous-menu sur mobile (au clic au lieu du survol)
    dropdownToggle.addEventListener('click', (e) => {
        if (window.innerWidth <= 768) {
            e.preventDefault(); // Empêche de charger la page "services.html" directement
            dropdown.classList.toggle('open');
        }
    });
});
