// JavaScript to handle smooth scrolling when clicking on navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const targetId = this.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);

        if (targetSection) {
            window.scrollTo({
                top: targetSection.offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// JavaScript to add fade-in animation when the page loads
document.addEventListener("DOMContentLoaded", function () {
    const sections = document.querySelectorAll('.section');

    sections.forEach((section, index) => {
        setTimeout(() => {
            section.style.opacity = 1;
            section.style.transform = 'translateY(0)';
        }, 200 * index); // Adjust the delay between sections (200 milliseconds in this example)
    });
});// Function to toggle the dropdown menu
function toggleDropdown() {
    var dropdownMenu = document.getElementById("dropdown-menu");
    if (dropdownMenu.style.display === "block") {
        dropdownMenu.style.display = "none";
    } else {
        dropdownMenu.style.display = "block";
    }
}

// Function to scroll to a section when a button is clicked and close the dropdown
function scrollToSection(sectionId) {
    var section = document.querySelector(sectionId);
    section.scrollIntoView({ behavior: 'smooth' });

    // Close the dropdown after clicking a button
    var dropdownMenu = document.getElementById("dropdown-menu");
    dropdownMenu.style.display = "none";
}
