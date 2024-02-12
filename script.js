const countdownDisplay = document.getElementById('countdown');
const datetimeInput = document.getElementById('datetime');

function updateCountdown() {
  const targetDate = new Date(datetimeInput.value).getTime();
  const now = new Date().getTime();
  const distance = targetDate - now;

  if (distance < 0) {
    countdownDisplay.textContent = 'Countdown expired';
    return;
  }

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  countdownDisplay.textContent = `${days}d ${hours}h ${minutes}m ${seconds}s`;
}

datetimeInput.addEventListener('change', updateCountdown);

// Update countdown every second
setInterval(updateCountdown, 1000);
