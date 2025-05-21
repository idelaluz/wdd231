document.addEventListener("DOMContentLoaded", function() {
    const topButtons = ["All", "CSE", "WDD"];
    const courseButtons = ["CSE 110", "WDD 130", "CSE 111", "CSE 210", "WDD 131", "WDD 231"];
  
    const topContainer = document.querySelector(".top-buttons");
    const courseContainer = document.querySelector(".course-buttons");
  
    // Clear existing buttons to prevent duplication
    topContainer.innerHTML = '';
    courseContainer.innerHTML = '';
  
    topButtons.forEach(label => {
      const btn = document.createElement("button");
      btn.textContent = label;
      topContainer.appendChild(btn);
    });
  
    courseButtons.forEach(label => {
      const btn = document.createElement("button");
      btn.textContent = label;
      courseContainer.appendChild(btn);
    });
  });
  
