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

// смена темы

// Устанавливаем начальную тему при загрузке страницы
document.addEventListener("DOMContentLoaded", function () {
    const savedTheme = localStorage.getItem("theme") || "light-theme"; // По умолчанию светлая тема
    document.body.className = savedTheme; // Устанавливаем сохраненную тему
  });
  
  // Слушатель для переключения темы
  document.getElementById("themeToggle").addEventListener("click", function () {
    const currentTheme = document.body.className;
  
    // Переключаем тему
    if (currentTheme === "light-theme") {
      document.body.className = "dark-theme";
      localStorage.setItem("theme", "dark-theme"); // Сохраняем темную тему
    } else {
      document.body.className = "light-theme";
      localStorage.setItem("theme", "light-theme"); // Сохраняем светлую тему
    }
  });