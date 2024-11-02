// Dark-Light Mode Toggle
function toggleDarkMode() {
  document.body.classList.toggle("dark-mode");
}

// Show the birthday message when the button is clicked
function showMessage() {
  document.getElementById("birthday-message").style.display = "block";
}

// Confetti Effect on Button Click
document.querySelector('.button').addEventListener('click', function () {
  for (let i = 0; i < 100; i++) {
    const confetti = document.createElement('div');
    confetti.classList.add('confetti');
    document.body.appendChild(confetti);

    confetti.style.left = `${Math.random() * 100}vw`;
    confetti.style.animationDuration = `${Math.random() * 3 + 2}s`;

    confetti.addEventListener('animationend', () => {
      confetti.remove();
    });
  }
});
