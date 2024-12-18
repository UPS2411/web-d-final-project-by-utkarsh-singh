const images = ["1.jpg", "2.jpg", "3.jpg", "4.jpg"];
let currentIndex = 0;
const changingImage = document.getElementById("changingImage");
function changeImage() {
  currentIndex = (currentIndex + 1) % images.length;
  changingImage.src = images[currentIndex];
}
setInterval(changeImage, 3000);
