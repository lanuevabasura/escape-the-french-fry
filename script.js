
const milei = document.getElementById('milei');
const frenchFry = document.getElementById('frenchFry');
const gameArea = document.getElementById('gameArea');

const gameAreaWidth = gameArea.offsetWidth;
const gameAreaHeight = gameArea.offsetHeight;
const characterSize = 50;

let mileiX = 100;
let mileiY = 100;
let fryX = 300;
let fryY = 300;

const speed = 5;
const frySpeed = 3;

document.addEventListener('keydown', moveMilei);

function moveMilei(event) {
    switch (event.key) {
        case 'ArrowUp':
            if (mileiY > 0) mileiY -= speed;
            break;
        case 'ArrowDown':
            if (mileiY < gameAreaHeight - characterSize) mileiY += speed;
            break;
        case 'ArrowLeft':
            if (mileiX > 0) mileiX -= speed;
            break;
        case 'ArrowRight':
            if (mileiX < gameAreaWidth - characterSize) mileiX += speed;
            break;
    }
    updatePositions();
}

function updatePositions() {
    milei.style.left = mileiX + 'px';
    milei.style.top = mileiY + 'px';

    // Move French fry towards Milei
    if (fryX < mileiX) fryX += frySpeed;
    if (fryX > mileiX) fryX -= frySpeed;
    if (fryY < mileiY) fryY += frySpeed;
    if (fryY > mileiY) fryY -= frySpeed;

    frenchFry.style.left = fryX + 'px';
    frenchFry.style.top = fryY + 'px';

    // Check for collision
    if (Math.abs(mileiX - fryX) < characterSize && Math.abs(mileiY - fryY) < characterSize) {
        alert('The French fry caught Milei! Game over.');
        resetGame();
    }
}

function resetGame() {
    mileiX = 100;
    mileiY = 100;
    fryX = 300;
    fryY = 300;
    updatePositions();
}

// Initialize positions
updatePositions();
