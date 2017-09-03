var titleToggle = document.querySelector('.toggle-faq');

titleToggle.addEventListener('click', activate);

function activate(e) {
    e.target.classList.toggle('active');
}