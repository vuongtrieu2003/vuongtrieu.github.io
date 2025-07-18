document.getElementById('open-invite').addEventListener('click', function() {
  const name = document.getElementById('guest-name').value.trim();
  if (!name) {
    alert('Vui lòng nhập tên!');
    return;
  }
  document.getElementById('name-form').classList.add('hidden');
  const inviteCard = document.getElementById('invite-card');
  document.getElementById('greeting').textContent = `Chào ${name},`;
  // Cập nhật các vị trí 'bạn' thành tên khách mời
  document.getElementById('guest-span').textContent = name;
  document.getElementById('guest-span-2').textContent = name;
  inviteCard.classList.remove('hidden');
  inviteCard.classList.add('fade-in');
});

// Countdown đến 07:30, 31/07/2025
function updateCountdown() {
  const countdownEl = document.getElementById('countdown');
  const target = new Date('2025-07-31T07:30:00+07:00');
  const now = new Date();
  let diff = target - now;
  if (diff < 0) diff = 0;
  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diff / (1000 * 60)) % 60);
  const seconds = Math.floor((diff / 1000) % 60);
  countdownEl.textContent = `${days} ngày ${String(hours).padStart(2,'0')}:${String(minutes).padStart(2,'0')}:${String(seconds).padStart(2,'0')}`;
}
setInterval(updateCountdown, 1000);
updateCountdown(); 