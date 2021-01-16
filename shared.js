let backdrop = document.querySelector('.backdrop');
let modal = document.querySelector('.modal');
let modalNoButton = document.querySelector('.modal__action--negative');
let selectPlanButtons = document.querySelectorAll('.plan button');
let toggleButton = document.querySelector('.toggle-button');
let mobileNav = document.querySelector('.mobile-nav');

if (selectPlanButtons !== undefined) {
    for (let i = 0; i < selectPlanButtons.length; i++) {
        console.log(selectPlanButtons[i]);
        selectPlanButtons[i].addEventListener('click', function () {
            modal.classList.add('open');
            backdrop.classList.add('open');
        });
    }
}

backdrop.addEventListener('click', function () {
    mobileNav.classList.remove('open');
    closeModal();
});

if (modalNoButton) {
    modalNoButton.addEventListener('click', closeModal);
}

function closeModal() {
    if (modal) {
        modal.classList.remove('open');

    }
    backdrop.classList.remove('open');
}

toggleButton.addEventListener('click', function () {
    mobileNav.classList.add('open');
    backdrop.classList.add('open');
});