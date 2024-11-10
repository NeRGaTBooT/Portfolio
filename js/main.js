// Бургер-меню
const burger = document.getElementById('burger');
const navMain = document.querySelector('.main_menu');
const burgerIcon = document.getElementById('burger-icon');

burger.addEventListener('click', () => {
    if (navMain.classList.contains('active')) {
        navMain.classList.remove('active');
        setTimeout(() => {
            navMain.style.display = 'none'; // Установка display: none после анимации
        }, 300); // Длительность анимации
        burgerIcon.src = 'img/ico/menu.svg'; // Путь к изображению меню
    } else {
        navMain.style.display = 'flex'; // Установка display: block при открытии
        setTimeout(() => {
            navMain.classList.add('active'); // Добавление класса active после отображения
        }, 10); // Небольшая задержка для корректной анимации
        burgerIcon.src = 'img/ico/x.svg'; // Путь к изображению крестика
    }
});