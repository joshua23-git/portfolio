const hamb = document.querySelector('.header .nav-bar .nav-list .hamb');
const mobile_menu = document.querySelector('.header .nav-bar .nav-list ul');
const header = document.querySelector('.header .container');

hamb.addEventListener('click', () => {
    hamb.classList.toggle('active');
    mobile_menu.classList.toggle('active');
});
menu_item.forEach((item) => {
    item.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        mobile_menu.classList.toggle('active');
    });

});

