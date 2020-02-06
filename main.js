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

const lightbox = document.querySelector(".lightbox");
const prewImage = document.querySelector(".lightbox__image");

function onClick(event) {
  let checkClick = event.target;
  if (!checkClick.classList.contains("li")) {
    checkClick = checkClick.closest(".gallery__item");
  } //проверяю куда я клацнул, нужно на LI
  //добавляю лайтбокс
  lightbox.classList.add("is-open");
  const origImage = checkClick.querySelector(".gallery__image");
  prewImage.src = origImage.dataset.source;
  //заменяю ссылки на картинку
  button.addEventListener('click', onClickBtn);
}

const button = document.querySelector('.lightbox');

function onClickBtn (event){
  const checkBtn = event.target;
  if(!checkBtn.classList.contains('lightbox__image')){
    lightbox.classList.remove('is-open');
    button.removeEventListener('click', onClickBtn);
  }
  container.addEventListener("click", onClick);
}
