const button = document.getElementById('myButton');

button.addEventListener('mousedown', () => {
    button.classList.add('active');
    button.style.transform = 'scale(0.8)'; // Уменьшение при нажатии

    let timer = 3;
    button.textContent = timer;

    const interval = setInterval(() => {
        timer--;
        button.textContent = timer;

        if (timer <= 0) {
            clearInterval(interval);
            window.location.href = 'https://t.me/GuenagumPremBot';
        }
    }, 1000);
});

button.addEventListener('mouseup', () => {
    button.classList.remove('active');
    button.style.transform = 'scale(1)'; // Возврат к исходному размеру
});
