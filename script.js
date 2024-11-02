document.querySelector('.button').addEventListener('click', function () {
  // Basic confetti animation
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

.confetti {
  position: fixed;
  width: 10px;
  height: 10px;
  background-color: #FF69B4;
  top: 0;
  opacity: 0.7;
  animation: fall linear forwards;
}

@keyframes fall {
  to {
    transform: translateY(100vh);
    opacity: 0;
  }
}
