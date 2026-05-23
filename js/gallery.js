import { images } from "./images.js";
/* 
<li class="gallery-item">
  <a class="gallery-link" href="large-image.jpg">
    <img
      class="gallery-image"
      src="small-image.jpg"
      data-source="large-image.jpg"
      alt="Image description"
    />
  </a>
</li> */
const imagesList = document.querySelector(".gallery");
const markup = images
  .map((image) => {
    return `
<li class="gallery-item">
  <a class="gallery-link" href="${image.original}">
    <img
      class="gallery-image"
      src="${image.preview}"
      data-source="${image.original}"
      alt="${image.description}"
    />
  </a>
</li>
`;
  })
  .join("");

imagesList.insertAdjacentHTML("beforeend", markup);

imagesList.addEventListener("click", (event) => {
  event.preventDefault();
  const target = event.target;
  if (target.nodeName !== "IMG") {
    return;
  }
  const imageUrl = target.dataset.source;
  console.log(imageUrl);
  basicLightbox.create(`<img src="${imageUrl}">`).show();
});
