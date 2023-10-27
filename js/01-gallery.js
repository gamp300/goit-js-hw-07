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

const galleryImages = document.querySelectorAll(".gallery__image");

let modalOpen = false;

galleryImages.forEach((image) => {
  image.addEventListener("click", (e) => {
    e.preventDefault();
    const largeImage = e.target.dataset.source;

    const instance = basicLightbox.create(`
      <img src="${largeImage}" width="800" height="600">
    `);

    instance.show();
    modalOpen = true;

    document.addEventListener("keydown", closeModalKey);
    function closeModalKey(e) {
      if (e.key === "Escape") {
        instance.close();
        document.removeEventListener("keydown", closeModalKey);
        modalOpen = false;
      }
    }
  });
});
