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
        data-source="${original}"
        alt="${description}"
      />
    </a>
  </li>`
);

galleryEl.insertAdjacentHTML('beforeend', markup.join(""));
galleryEl.addEventListener("click", onClickOpenModal);

function onClickOpenModal(event) {
  event.preventDefault();
  const { target } = event;

  if (!target.classList.contains("gallery__image")) {
    return;
  }
  
  const src = target.dataset.source;
  const alt = target.alt;

  const instance = basicLightbox.create(`
    <img width="800" height="600" src="${src}" alt="${alt}" />
  `);
  instance.show();

  galleryEl.addEventListener("keydown", instanceCloseModal);
  galleryEl.removeEventListener("keydown", instanceCloseModal);
              
  function instanceCloseModal(event) {
     if (event.code === "Escape") {
      instance.close()
          }
  };
};
       



