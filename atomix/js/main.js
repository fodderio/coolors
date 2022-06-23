const main = document.querySelector("main");
const background = document.querySelector("#background-image");
const barTasting = document.querySelector(".bar-tasting");
const chefsCounter = document.querySelector(".chefs-counter");

function resetBackground() {
  background.setAttribute("src", "atomix/images/Atomix1.jpg");
}

barTasting.addEventListener("mouseover", function () {
  background.setAttribute("src", "atomix/images/Atomix2.jpg");
});

chefsCounter.addEventListener("mouseover", function () {
  background.setAttribute("src", "atomix/images/Atomix3.jpg");
});

barTasting.addEventListener("mouseleave", resetBackground);

chefsCounter.addEventListener("mouseleave", resetBackground);
