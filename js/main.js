const btnOpen = document.getElementById('btn-open');
const modal = document.querySelector('.modal');
const btnClose = document.getElementById('btn-close');

function openModal() {
    modal.style.display = 'block'
}

function closeModal() {
    modal.style.display = 'none'
}

function closeModalWindow(e) {
    if (e.target == modal) {
        modal.style.display = 'none'
    }
}


btnOpen.addEventListener('click', openModal);
btnClose.addEventListener('click', closeModal);
window.addEventListener('click', closeModalWindow)