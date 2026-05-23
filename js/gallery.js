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
images.forEach((image) => {
  const listItem = document.createElement("li");
  listItem.classList.add("gallery-item");

  const listItemLink = document.createElement("a");
  listItemLink.classList.add("gallery-link");
  listItemLink.href = image.original;

  const listItemImage = document.createElement("img");
  listItemImage.classList.add("gallery-image");
  listItemImage.src = image.preview;
  listItemImage.alt = image.description;
  listItemImage.dataset.source = image.original;

  listItemLink.append(listItemImage);
  listItem.append(listItemLink);
  imagesList.append(listItem);
});

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
