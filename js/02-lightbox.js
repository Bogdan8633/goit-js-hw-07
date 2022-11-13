import { galleryItems } from "./gallery-items.js";
// Change code below this line

const refs = {
  ulListEl: document.querySelector(".gallery"),
};
const addMarkup = createGalleryMarkup(galleryItems);
refs.ulListEl.insertAdjacentHTML("beforeend", addMarkup);

function createGalleryMarkup(images) {
  return images
    .map(({ preview, original, description }) => {
      return `<a class="gallery__item" href="${original}" rel="nofollow">
<img class="gallery__image" src="${preview}" alt="${description}" />
</a>`;
    })
    .join("");
}

const lightbox = new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionDelay: 250,
});
