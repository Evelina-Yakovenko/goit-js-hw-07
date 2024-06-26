import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const galleryEl = document.querySelector(".gallery");
const markup = galleryItems.map(({ preview, original, description }) => `
  <li class="gallery__item">
    <a class="gallery__link" href="${original}">
      <img
        class="gallery__image"
        src="${preview}"
        alt="${description}"
      />
    </a>
  </li>`
);

galleryEl.insertAdjacentHTML('beforeend', markup.join(""));

      const lightbox = new SimpleLightbox('.gallery a', {
        captions: true,
        captionDelay: 250,
        captionPosition:'bottom',
        captionSelector: 'img',
        captionsData: 'alt'
      });


