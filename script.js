document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Предотвратить стандартное отправление формы

    // Получаем данные формы
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Простая проверка данных
    if (name && email && message) {
        document.getElementById('formResponse').textContent = 'Спасибо за ваше сообщение, ' + name + '. Мы свяжемся с вами в ближайшее время.';
        document.getElementById('contactForm').reset(); // Очищаем форму
    } else {
        document.getElementById('formResponse').textContent = 'Пожалуйста, заполните все поля.';
    }
});
