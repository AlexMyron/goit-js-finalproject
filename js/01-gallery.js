import { galleryItems } from './gallery-items.js';
// Change code below this line
import { createGallery, createItemTemplate } from './common.js';

const galleryWrapper = document.querySelector('.gallery');
const galleryContent = createGallery(galleryItems, createItemTemplate);
let modalInstance;

galleryWrapper.insertAdjacentHTML('beforeend', galleryContent);
galleryWrapper.addEventListener('click', handleClickEvent);

function handleClickEvent(e) {
  e.preventDefault();
  const isImageClicked = e.target.classList.contains('gallery__image');

  if (!isImageClicked) return;
  modalInstance = createModalInstance(e.target.dataset.source);
  modalInstance.show();

  document.addEventListener('keydown', handleKeyEvent);
}

function createModalInstance(imageSrc) {
  return basicLightbox.create(`
    <img width="1400" height="900" src="${imageSrc}">
  `);
}

function handleKeyEvent(e) {
  e.preventDefault();

  if (e.code !== 'Escape') return;
  modalInstance.close();
  document.removeEventListener('keydown', handleKeyEvent);
}
