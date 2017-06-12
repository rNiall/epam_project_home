
document.querySelector('.mobile-menu').addEventListener('click', function () {
    document.querySelector('.mobile-menu').classList.toggle('mobile-menu--close');
    document.querySelector('.menu').classList.toggle('is-visible');
});