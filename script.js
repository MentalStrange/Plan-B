// find section one to scroll
const featureSection = document.querySelector(".feature");
// select the button that will use to scroll
const scrollBtn = document.querySelector(".scrollToFeature");
// function to scroll
scrollBtn.addEventListener("click", () => {
  const section1Cor = featureSection.getBoundingClientRect();
  window.scrollTo({
    top: section1Cor.top + window.scrollY,
    left: section1Cor.left + window.scrollX,
    behavior: "smooth",
  });
});
