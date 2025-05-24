document.addEventListener("DOMContentLoaded", function () {
  const courseButtons = document.querySelectorAll(".course-buttons button");
  const filterButtons = document.querySelectorAll(".top-buttons button");
  const hamburger = document.querySelector(".hamburger");
  const navMenu = document.querySelector("nav ul");

  // 1. Toggle hamburger menu on mobile
  hamburger.addEventListener("click", () => {
    navMenu.classList.toggle("show");
  });

  // 2. Toggle gray/blue state on course buttons
  courseButtons.forEach(button => {
    button.addEventListener("click", () => {
      button.classList.toggle("selected");
      updateCredits();
    });
  });

  // 3. Filter course buttons by top buttons
  filterButtons.forEach(button => {
    button.addEventListener("click", () => {
      const filter = button.getAttribute("data-filter");

      courseButtons.forEach(courseBtn => {
        const text = courseBtn.textContent;
        const shouldShow = filter === "all" || text.includes(filter);
        courseBtn.style.display = shouldShow ? "inline-block" : "none";
      });

      updateCredits(); // update total after filtering
    });
  });

  // 4. Calculate total credits using filter()
  function updateCredits() {
    const buttons = Array.from(document.querySelectorAll(".course-buttons button"));

    const visibleBlueButtons = buttons.filter(button => {
      const isVisible = window.getComputedStyle(button).display !== "none";
      const isGray = button.classList.contains("selected");
      return isVisible && !isGray;
    });

    const total = visibleBlueButtons.length * 2;
    document.getElementById("credit-value").textContent = total;
  }

  // 5. Initialize on load
  updateCredits();
});

