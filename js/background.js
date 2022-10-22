const BG_IMAGE_CLASS = "bgImage";
const images = [
  "img/wallpapers-0.jpg",
  "img/wallpapers-1.jpg",
  "img/wallpapers-2.jpg",
  "img/wallpapers-3.jpg",
  "img/wallpapers-4.jpg",
  "img/wallpapers-5.jpg",
  "img/wallpapers-6.jpg",
  "img/wallpapers-7.jpg",
];

function getRandomNumber(endExclusive) {
  return Math.floor(Math.random() * endExclusive);
}
const chosenImage = images[getRandomNumber(images.length)];

const bgImage = document.getElementById("bgImage");
bgImage.id = BG_IMAGE_CLASS;
bgImage.src = chosenImage;
