document.addEventListener("DOMContentLoaded", function () {
  const courseButtons = document.querySelectorAll(".course-buttons button");

  courseButtons.forEach(button => {
    button.addEventListener("click", () => {
      button.classList.toggle("selected");
    });
  });
});
