import { galleryItems } from "./gallery-items.js";
// Change code below this line

// console.log(galleryItems);

const refs = {
  ulListEl: document.querySelector(".gallery"),
};
const addMarkup = createGalleryMarkup(galleryItems);
refs.ulListEl.insertAdjacentHTML("beforeend", addMarkup);

// console.log(createGalleryMarkup(galleryItems));

function createGalleryMarkup(images) {
  return images
    .map(({ preview, original, description }) => {
      return `<a class="gallery__item" href="${original}" rel="nofollow">
<img class="gallery__image" src="${preview}" alt="${description}" />
</a>`;
    })
    .join("");
}

refs.ulListEl.addEventListener("click", onListClick);

function onListClick(evt) {
  evt.preventDefault();

  if (!evt.target.classList.contains("gallery__image")) {
    return;
  }
  const getBigImageLink = evt.target.closest(".gallery__item").href;

  const lightbox = new SimpleLightbox(".gallery a", {
    captionsData: "alt",
    captionDelay: 250,
  });
}
