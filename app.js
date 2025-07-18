function showInvitation() {
  const name = document.getElementById('recipient-name').value.trim();
  if (name === '') {
    alert('Vui lòng nhập tên của bạn!');
    return;
  }
  document.getElementById('name-input-container').classList.add('hidden');
  document.getElementById('invitation-card').classList.remove('hidden');

  document.getElementById('recipient').textContent = name;
  document.getElementById('recipient-2').textContent = name;
  document.getElementById('recipient-3').textContent = name;

  // Start fireworks and music after thiệp hiện
  startFireworks();
  document.getElementById('bg-music').play();
  startCountdown();
}

// Fireworks effect
function startFireworks() {
  const canvas = document.getElementById('fireworks');
  const ctx = canvas.getContext('2d');
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  let particles = [];
  function rand(min, max) { return Math.random() * (max - min) + min; }
  function Particle() {
    this.x = rand(0, canvas.width);
    this.y = canvas.height;
    this.vx = rand(-2, 2);
    this.vy = rand(-10, -5);
    this.alpha = 1;
    this.color = `hsl(${rand(0, 360)}, 100%, 50%)`;
  }
  Particle.prototype.update = function() {
    this.x += this.vx;
    this.y += this.vy;
    this.vy += 0.1;
    this.alpha -= 0.01;
  };
  Particle.prototype.draw = function() {
    ctx.globalAlpha = this.alpha;
    ctx.beginPath();
    ctx.arc(this.x, this.y, 3, 0, Math.PI * 2);
    ctx.fillStyle = this.color;
    ctx.fill();
  };
  function loop() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    if (particles.length < 150 && Math.random() < 0.3) particles.push(new Particle());
    particles.forEach((p, i) => {
      p.update();
      p.draw();
      if (p.alpha <= 0) particles.splice(i, 1);
    });
    requestAnimationFrame(loop);
  }
  loop();
}

// Countdown
function startCountdown() {
  const countdownEl = document.getElementById('countdown');
  const eventDate = new Date('2025-07-31T07:30:00');
  function updateCountdown() {
    const now = new Date();
    const diff = eventDate - now;
    if (diff <= 0) {
      countdownEl.textContent = "🎉 Đã đến giờ buổi lễ!";
      return;
    }
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((diff / (1000 * 60)) % 60);
    const seconds = Math.floor((diff / 1000) % 60);
    countdownEl.textContent = `⏳ Thời gian còn lại đến lễ tốt nghiệp: ${days} ngày ${hours}h:${minutes}m:${seconds}s`;
    setTimeout(updateCountdown, 1000);
  }
  updateCountdown();
}

// Music toggle
const music = document.getElementById('bg-music');
document.getElementById('music-toggle').addEventListener('click', function() {
  if (music.paused) {
    music.play();
    this.textContent = '🔇 Tắt nhạc';
  } else {
    music.pause();
    this.textContent = '🔊 Bật nhạc nền';
  }
});
