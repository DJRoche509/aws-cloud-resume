// Visitor Counter
function updateCounter() {
    
}

// Contact Form Submission



// Get the Resume and Contact me tabs
const resumeTab = document.getElementById("resume-tab");
const contactTab = document.getElementById("contact-tab");

// Get the content sections
const resumeSection = document.getElementById("resume-section");
const contactSection = document.getElementById("contact-section");

// Toggle function to switch between Resume and Contact me tabs
function toggleTabs(selectedTab) {
    if (selectedTab === "resume") {
        resumeTab.classList.add("active");
        contactTab.classList.remove("active");
        resumeSection.style.display = "block";
        contactSection.style.display = "none";
    } else if (selectedTab === "contact") {
        contactTab.classList.add("active");
        resumeTab.classList.remove("active");
        contactSection.style.display = "block";
        resumeSection.style.display = "none";
    }
}

// Event listeners for Resume and Contact me tabs
resumeTab.addEventListener("click", function (e) {
    e.preventDefault();  // Prevent default behavior of anchor tag
    toggleTabs("resume");
});

contactTab.addEventListener("click", function (event) {
    event.preventDefault()  // Prevent default behavior of anchor tag
    toggleTabs("contact");
});

// Initial state: Resume tab is active
toggleTabs(url_for("resume"));