"use strict";

import gallery from "./gallery-items.js";

const container = document.querySelector(".js-gallery");
container.addEventListener("click", onClick);

function createGalery(images) {
  const image = images.reduce(
    (item, img) =>
      item +
      `<li class="gallery__item">
    <a class="gallery__link" href="#">
      <img class="gallery__image" 
      src = '${img.preview}'
      data-source = '${img.original}'
      alt = '${img.description}'/>
    </a>
    </li>`,
    ""
  );
  return container.insertAdjacentHTML("afterbegin", image);
}
createGalery(gallery);

const jsLightbox = document.querySelector(".js-lightbox");
const origImage = document.querySelector(".lightbox__image");
const button = document.querySelector(".lightbox__button");

function onClick(event) {
  let checkClick = event.target;
  if (checkClick.classList.contains("gallery__image")) {
    jsLightbox.classList.add("is-open");
    origImage.src = checkClick.dataset.source;
    button.addEventListener("click", onClickBtn);
  }
}

function onClickBtn(event) {
  let checkBtn = event.target;
  if (!checkBtn.classList.contains("lightbox__image")) {
    jsLightbox.classList.remove("is-open");
    origImage.src = "";
    button.removeEventListener("click", onClickBtn);
  }
}
const trtr = document.querySelector(".lightbox__content");
trtr.addEventListener("click", funClickFree);

function funClickFree(event) {
  if (event.target === event.currentTarget) {
    jsLightbox.classList.remove("is-open");
  }
}
