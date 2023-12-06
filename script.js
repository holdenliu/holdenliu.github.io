document.addEventListener("DOMContentLoaded", function() {
    const gameArea = document.getElementById('gameArea');
    const button = document.getElementById('gameButton');
    const scoreDisplay = document.getElementById('score');
    let score = 0;

    button.addEventListener('click', function() {
        let x = Math.random() * (gameArea.offsetWidth - button.offsetWidth);
        let y = Math.random() * (gameArea.offsetHeight - button.offsetHeight);
        button.style.left = x + 'px';
        button.style.top = y + 'px';
        score++;
        scoreDisplay.textContent = score;
    });
});
