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

  const instance = basicLightbox.create(
    `
    <div class="modal">
        <img src="${getBigImage}"/>
        </p>
    </div>
`,
    {
      /*
       * Prevents the lightbox from closing when clicking its background.
       */
      closable: true,
      /*
       * One or more space separated classes to be added to the basicLightbox element.
       */
      className: "",
      /*
       * Function that gets executed before the lightbox will be shown.
       * Returning false will prevent the lightbox from showing.
       */
      onShow: (instance) => {
        window.addEventListener("keydown", onEscKeyPress);
      },
      /*
       * Function that gets executed before the lightbox closes.
       * Returning false will prevent the lightbox from closing.
       */
      onClose: (instance) => {
        window.removeEventListener("keydown", onEscKeyPress);
      },
    }
  );
  instance.show();

  function onEscKeyPress(event) {
    if (event.code === "Escape") {
      instance.close();
    }
  }
}
