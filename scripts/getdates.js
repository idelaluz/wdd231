// Get the current year and last modified date:
document.getElementById("currentyear").textContent = new Date().getFullYear();

const lastModified = new Date(document.lastModified);
const formattedDate = lastModified.toLocaleDateString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
});

document.getElementById("lastModified").textContent = formattedDate;
