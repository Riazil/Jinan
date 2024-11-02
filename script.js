// script.js

const nameElement = document.getElementById('name');
const confettiButton = document.getElementById('confetti-button');
const confettiContainer = document.getElementById('confetti-container');

// Set nama
const name = 'Nama Kamu'; // Ganti dengan nama yang diinginkan
nameElement.textContent = name;

// Buat confetti
confettiButton.addEventListener('click', () => {
    for (let i = 0; i < 100; i++) {
        const confettiElement = document.createElement('div');
        confettiElement.className = 'confetti';
        confettiElement.style.backgroundColor = getRandomColor();
        confettiElement.style.left = ${Math.random() * 100}vw;
        confettiElement.style.animationDelay = ${Math.random() * 2}s;
        confettiContainer.appendChild(confettiElement);
        
        // Hapus confetti setelah animasi selesai
        setTimeout(() => {
            confettiElement.remove();
        }, 2000);
    }
});

// Fungsi untuk mendapatkan warna acak
function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}