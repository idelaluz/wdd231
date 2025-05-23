document.addEventListener("DOMContentLoaded", function () {
  const courseButtons = document.querySelectorAll(".course-buttons button");
  const filterButtons = document.querySelectorAll(".top-buttons button");

  // 1. Toggle selection class on course buttons
  courseButtons.forEach(button => {
    button.addEventListener("click", () => {
      button.classList.toggle("selected");
    });
  });

  // 2. Filter course buttons based on top button clicked
  filterButtons.forEach(button => {
    button.addEventListener("click", () => {
      const filter = button.getAttribute("data-filter");

      courseButtons.forEach(courseBtn => {
        const text = courseBtn.textContent;

        if (filter === "all") {
          courseBtn.style.display = "inline-block";
        } else if (text.includes(filter)) {
          courseBtn.style.display = "inline-block";
        } else {
          courseBtn.style.display = "none";
        }
      });
    });
  });
});

const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector("nav ul");

hamburger.addEventListener("click", () => {
    navMenu.classList.toggle("show");
  });
