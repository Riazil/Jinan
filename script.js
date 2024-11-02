// Dark-Light Mode Toggle
function toggleDarkMode() {
  const body = document.body;
  body.classList.toggle("dark-mode");

  // Toggle between sun and moon icon
  const icon = document.getElementById("icon");
  if (body.classList.contains("dark-mode")) {
    icon.innerHTML = `<path d="M12 17a5 5 0 1 0 0-10 5 5 0 0 0 0 10zm0-16a9 9 0 0 1 0 18 9 9 0 0 1 0-18z"/>`;
    body.style.backgroundColor = "#1a202c";  // Set background color for dark mode
    body.style.color = "#f7fafc";            // Set text color for dark mode
  } else {
    icon.innerHTML = `<path d="M12 2a1 1 0 0 1 1 1v2a1 1 0 0 1-2 0V3a1 1 0 0 1 1-1zm0 17a1 1 0 0 1-1 1v2a1 1 0 1 1-2 0v-2a1 1 0 0 1 2 0zm-7.071-9.071a1 1 0 0 1 1.414 0L8.414 12a1 1 0 0 1-1.414 1.414L3.514 9.929a1 1 0 0 1 0-1.414zm11.314 7.314a1 1 0 0 1 1.414 0l2.293 2.293a1 1 0 0 1-1.414 1.414l-2.293-2.293a1 1 0 0 1 0-1.414zM4.929 5.686a1 1 0 0 1 0 1.414L3.515 7.514a1 1 0 0 1-1.414-1.414l1.414-1.414a1 1 0 0 1 1.414 0zm14.142 12.728a1 1 0 0 1 0 1.414L17.656 21.9a1 1 0 0 1-1.414-1.414l2.293-2.293a1 1 0 0 1 1.414 0zm-9.193-5.5a1 1 0 0 1 1.414-1.414l2.292 2.293a1 1 0 0 1-1.414 1.414L10.88 13.514a1 1 0 0 1 0-1.414z"/>`;
    body.style.backgroundColor = "#fef3f7";  // Set background color for light mode
    body.style.color = "#1a202c";            // Set text color for light mode
  }
}

// Show the birthday message when the button is clicked
function showMessage() {
  document.getElementById("birthday-message").classList.remove("hidden");
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
