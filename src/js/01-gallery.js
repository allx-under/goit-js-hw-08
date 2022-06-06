// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

import SimpleLightbox from "simplelightbox";

import "simplelightbox/dist/simple-lightbox.min.css";

console.log(galleryItems);

const galleryContainer = document.querySelector(".gallery")

addGalleryItemsToHtml(createGalleryItems(galleryItems));

function createGalleryItems (items) {
  const galleryItemsEl = items.map((item) => {
    return `<div class="gallery__item"><a class="gallery__link" href="${item.original}">
  <img class="gallery__image" src="${item.preview}" alt="${item.description}" />
</a></div>`
  }).join("");
  
  return galleryItemsEl;
}

function addGalleryItemsToHtml(items) {
  galleryContainer.innerHTML = items;
}
const galleryLightbox = new SimpleLightbox('.gallery a', {
  captionsData: "alt",
  captionDelay: 250,
})
