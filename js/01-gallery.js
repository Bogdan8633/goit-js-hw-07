import { galleryItems } from "./gallery-items.js";
// Change code below this line

const galleryDivEl = document.querySelector(".gallery");

const galleryMarkup = createGalleryMarkup(galleryItems);
galleryDivEl.insertAdjacentHTML("beforeend", galleryMarkup);

function createGalleryMarkup(images) {
  return images
    .map(({ preview, original, description }) => {
      return `<div class="gallery__item">
      <a class="gallery__link" href="${original}" rel="nofollow">
        <img
          class="gallery__image"
          src="${preview}"
          data-source="${original}"
          alt="${description}"
        />
      </a>
    </div>`;
    })
    .join("");
}

galleryDivEl.addEventListener("click", onDivElClick);

function onDivElClick(evt) {
  evt.preventDefault();

  if (!evt.target.classList.contains("gallery__image")) {
    return;
  }

  const getBigImage = evt.target.dataset.source;

  const instance = basicLightbox.create(`
    <div class="modal">
        <img src="${getBigImage}"/>
        </p>
    </div>
`);
  instance.show();
  window.addEventListener("keydown", onEscKeyPress);

  function onEscKeyPress(event) {
    if (event.code === "Escape") {
      instance.close();
      window.removeEventListener("keydown", onEscKeyPress);
    }
  }
}
