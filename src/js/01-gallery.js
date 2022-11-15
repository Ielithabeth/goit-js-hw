// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

console.log(galleryItems);

import SimpleLightbox from "simplelightbox"; 
import "simplelightbox/dist/simple-lightbox.min.css";

console.log(SimpleLightbox);

const gallery = document.querySelector(".gallery");
const galleryRef = document.querySelectorAll(".gallery__item")
const galleryImg = document.querySelectorAll(".gallery__image")

const addImages = galleryItems.map(image =>
    `<div class = "gallery__item"><a class="gallery__link" href="${image.original}"><img class = "gallery__image" loading="lazy" src = "${image.preview}" data-source = "${image.original}" alt = "${image.description}" width = "200"></a></div>`).join(" ");

gallery.insertAdjacentHTML('afterbegin', addImages);

let modal;
gallery.addEventListener("click", (event) => {
    event.preventDefault();
    if (event.target.nodeName !== 'IMG') {
        return;
    }
    modal = basicLightbox.create(`<img src="${event.target.dataset.source}">`);
    modal.show();
});

gallery.addEventListener("keydown", (event) => {
    if (event.code == "Escape") {
       modal.close();
    };
});