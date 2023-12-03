import { galleryItems } from './gallery-items.js';
// Change code below this line
import { createGallery, createLightboxGallery } from './common.js';

const galleryWrapper = document.querySelector('.gallery');
const galleryContent = createGallery(galleryItems, createLightboxGallery);

galleryWrapper.insertAdjacentHTML('beforeend', galleryContent);

const lightboxOptions = {
  captionSelector: 'img',
  captionType: 'attr',
  captionsData: 'alt',
  captionPosition: 'bottom',
  captionDelay: 250,
};

new SimpleLightbox('.gallery .gallery__link', lightboxOptions);
