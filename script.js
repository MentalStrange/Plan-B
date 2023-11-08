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
// ----------------------------------------------------------------
// start the navbar dynamically
document.querySelectorAll(".links").forEach((li) => {
  li.addEventListener("click", (e) => {
    e.preventDefault();
    const id = e.target.getAttribute("href");
    document.querySelector(id).scrollIntoView({
      behavior: "smooth",
    });
  });
});

// work on the operation section
// btns.forEach((btn) => {
//   btn.addEventListener("click", (e) => {});
// });

// another way to select the buttons using the container that wrapped all of them
const btns = document.querySelectorAll(".option-btn button");
const btnsContainer = document.querySelector(".option-btn");
const optionContents = document.querySelectorAll(".option-content");
btnsContainer.addEventListener("click", (e) => {
  const clickedBtn = e.target;
  btns.forEach((btn) => {
    btn.classList.remove("scale-active");
  });
  clickedBtn.classList.add("scale-active");
  const optionContent = document.querySelector(
    `.content-${clickedBtn.dataset.tab}`
  );
  optionContents.forEach((content) => {
    content.classList.add("hidden");
  });
  optionContent.classList.remove("hidden");
});
//  Navbar animation..
const nav = document.querySelector("nav");
const navItems = document.querySelectorAll(".link-item");
nav.addEventListener("mouseover", (e) => {
  if (e.target.classList.contains("link-item")) {
    const linkMousedOver = e.target;
    navItems.forEach((item) => {
      if (item != linkMousedOver) {
        item.style.opacity = 0.5;
      }
    });
  }
});
nav.addEventListener("mouseout", (e) => {
  if (e.target.classList.contains("link-item")) {
    const linkMousedOver = e.target;
    navItems.forEach((item) => {
      if (item != linkMousedOver) {
        item.style.opacity = 1;
      }
    });
  }
});
