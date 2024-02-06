
let intervalId
let sec
const heading = document.getElementById('heading');
const button = document.createElement('button')
const nav = document.getElementById('nav');

const endGame = () => {
    document.removeEventListener('mousedown', endGame);
    document.removeEventListener('mousemove', endGame);
    document.removeEventListener('keydown', endGame);
    clearInterval(intervalId);
    heading.innerHTML = `You did something after ${sec} ${sec > 1 ? 'seconds' : 'second'}, you lose.`;
    button.innerHTML = 'Back to Main Manu';
    button.addEventListener('click', startUp)
    nav.appendChild(button)
}

const startGame = () => {
    document.removeEventListener('mousedown', startGame);
    heading.innerHTML = 'You are doing nothing.';
    sec = 0;
    intervalId = setInterval(() => {
        heading.innerHTML = `You have been doing nothing for ${sec} seconds.`;
        sec++;
    }, 1000);
    document.addEventListener('mousedown', endGame);
    document.addEventListener('mousemove', endGame);
    document.addEventListener('keydown', endGame);
}


const startUp = () => {
    button.parentNode !== null && nav.removeChild(button)
    heading.innerHTML = 'Click anywhere to do nothing';
    document.addEventListener('mousedown', startGame);
}

startUp();
