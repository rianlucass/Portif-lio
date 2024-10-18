const toggleButton = document.getElementById('toggle-dark-mode');
const body = document.body;
const sections = document.querySelectorAll('section');
const header = document.querySelector('header');
const footer = document.querySelector('footer');

toggleButton.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    header.classList.toggle('dark-mode');
    footer.classList.toggle('dark-mode');
    sections.forEach(section => section.classList.toggle('dark-mode'));
    
    if (body.classList.contains('dark-mode')) {
        toggleButton.textContent = 'Modo Claro';
    } else {
        toggleButton.textContent = 'Modo Escuro';
    }
});
