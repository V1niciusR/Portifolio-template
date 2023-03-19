const cards = document.querySelectorAll('.card');

cards.forEach(card => {
  card.addEventListener('mousemove', rotate);
  card.addEventListener('mouseout', stopRotate);
});

function rotate(event) {
  const card = this.querySelector('.card__title');
  const halfHeight = card.offsetHeight / 2;
  const halfWidth = card.offsetWidth / 2;
  card.style.transform = 'rotateX(' + -(event.offsetY - halfHeight) / 10 + 'deg) rotateY(' + (event.offsetX - halfWidth) / 10 + 'deg)';
}

function stopRotate(event) {
  const card = this.querySelector('.card__title');
  card.style.transform = 'rotateX(0) rotateY(0)';
}
