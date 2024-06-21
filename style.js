// scripts.js
let currentImageIndex = -1;
const images = document.querySelectorAll('.gallery-image');
const modal = document.getElementById('modal');
const modalImage = document.getElementById('modalImage');

function openModal(src) {
  modal.style.display = 'flex';
  modalImage.src = src;
  currentImageIndex = Array.from(images).findIndex(img => img.src === src);
}

function closeModal() {
  modal.style.display = 'none';
}

function navigateImages(direction) {
  currentImageIndex = (currentImageIndex + direction + images.length) % images.length;
  modalImage.src = images[currentImageIndex].src;
}

window.onclick = function(event) {
  if (event.target === modal) {
    closeModal();
  }
};
