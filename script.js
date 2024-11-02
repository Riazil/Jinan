const nameElement = document.getElementById('name');
const confettiButton = document.getElementById('confetti-button');
const confettiContainer = document.getElementById('confetti-container');
const calendarElement = document.getElementById('calendar');

// Menampilkan tanggal saat ini
function updateCalendar() {
    const today = new Date();
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    calendarElement.textContent = today.toLocaleDateString('id-ID', options);
}

// Memperbarui kalender saat halaman dimuat
updateCalendar();

// Buat confetti
confettiButton.addEventListener('click', () => {
    for (let i = 0; i < 100; i++) {
        const confettiElement = document.createElement('div');
        confettiElement.className = 'confetti';
        confettiElement.style.backgroundColor = getRandomColor();
        confettiElement.style.left = `${Math.random() * 100}vw`;
        confettiElement.style.animationDelay = `${Math.random() * 2}s`;
        confettiElement.style.transform = `rotate(${Math.random() * 360}deg)`;
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
