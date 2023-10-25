import { galleryItems } from "./gallery-items.js";
// Change code below this line

const gallery = document.querySelector(".gallery");

console.log(galleryItems[0].preview);

galleryItems.forEach((element) => {
  const item = document.createElement("li");
  gallery.append(item);
  item.classList.add("gallery__item");

  const conect = document.createElement("a");
  item.append(conect);
  conect.classList.add("gallery__link");
  conect.setAttribute("href", element.original);

  const image = document.createElement("img");
  conect.append(image);
  image.classList.add("gallery__image");
  image.setAttribute("src", element.preview);
  image.setAttribute("data-source", element.original);
  image.setAttribute("alt", element.description);
});

gallery.addEventListener("click", (event) => {
  event.preventDefault();

  console.log(event.target);
});
