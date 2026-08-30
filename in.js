
// function revealSections() {
//   const reveals = document.querySelectorAll(".reveal");
//   const windowHeight = window.innerHeight;

//   reveals.forEach((section) => {
//     const sectionTop = section.getBoundingClientRect().top;
//     const revealPoint = 120;

//     if (sectionTop < windowHeight - revealPoint) {
//       section.classList.add("active");
//     }
//   });
// }

// window.addEventListener("scroll", revealSections);
// revealSections(); 

// const sections = document.querySelectorAll("section");
// const navItems = document.querySelectorAll(".nav-item");

// window.addEventListener("scroll", () => {
//   let current = "";

//   sections.forEach((section) => {
//     const sectionTop = section.offsetTop;
//     const sectionHeight = section.clientHeight;

//     if (pageYOffset >= sectionTop - sectionHeight / 3) {
//       current = section.getAttribute("id");
//     }
//   });

//   navItems.forEach((item) => {
//     item.classList.remove("active");
//     if (item.getAttribute("href").includes(current)) {
//       item.classList.add("active");
//     }
//   });
// });


const sections = document.querySelectorAll("section");
const navItems = document.querySelectorAll(".nav-item");

window.addEventListener("scroll", () => {
  let current = "";

  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;

    if (window.scrollY >= sectionTop - sectionHeight / 3) {
      current = section.getAttribute("id");
    }
  });

  navItems.forEach((item) => {
    item.classList.remove("active");

    if (item.getAttribute("href") === `#${current}`) {
      item.classList.add("active");
    }
  });
});




