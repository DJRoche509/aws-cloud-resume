// Visitor Counter
const counter = document.getElementById("visitor-count");
async function updateCounter() {
    let responsee = await fetch("https://bd3nqxp3kyfxqqxehujwnkdjym0wfsgw.lambda-url.us-east-2.on.aws/"); //("https://in3e4ogyqefn6n4cik3mwpuxb40jglxp.lambda-url.us-east-2.on.aws/") with Terraform ;
    let data = await response.json();
    counter.innerHTML = `${data}`;
}

// Contact Form Submission
const fullName = document.getElementById('name');
const phone = document.getElementById('phone');
const email = document.getElementById("email");
const message = document.getElementById('message');
// Add event listener on form container
const submit = document.getElementsByClassName('contactform')[0];


// Function to reset the contact form
const resetForm = () => {
    fullName.value = '';
    phone.value = '';
    email.value = '';
    message.value = '';
}

// Code for retrieving form info and sending email
function sendMessage() {    
    // Gathering form value into one format 
    let ebody = `        
        <b>Name: &nbsp; ${fullName.value}
        <br>
        <b>Phone no: &nbsp; ${phone.value}
        <br>
        <b>Email: &nbsp; ${email.value}
        <br>
        <b>Message: <br> ${message.value}
        <br>
    `
    console.log(fullName.value);
    console.log(email.value, typeof(email.value));

    // Email Code Here with SmtpJS
    Email.send({
        SecureToken: "81349cd6-892b-4f41-b056-a0eb87d613fd",
        To: "davjroche@gmail.com",
        From: "davjroche@gmail.com",
        Subject: "Cloud Resume Message from " + fullName.value,
        Body: ebody
    }).then(() => {
        // Confirm successful sent of message 
        alert("Message sent successfully")
        // call Reset() to reset the form after successful submission
        resetForm();
    }).catch( error => {
        console.error('Error occurred while sending email:', error);
        alert("Failed to send message. Please try again.");
    });
}


/* Dynamic changing text that cycles thru the array of job titles */
const dynamicText = document.getElementById("dynamic-text");
const phrases = [
    "Cloud Engineer",
    "Cloud Architect",
    "Software Engineer",
    "DevOps Engineer",
    "Data Analyst",
    "Machine Learning Enthusiast"
];
let currentPhrase = 0;
let currentCharacter = 0;
let isDeleting = false;

function typeEffect() {
    const current = phrases[currentPhrase];
    const next = phrases[(currentPhrase + 1) % phrases.length];
    const commonLength = getCommonPrefixLength(current, next);

    if (!isDeleting) {
        if (currentCharacter < current.length) {
            dynamicText.textContent += current.charAt(currentCharacter);
            currentCharacter++;
            setTimeout(typeEffect, 80); // Typing speed
        } else {
            setTimeout(() => { isDeleting = true; typeEffect(); }, 900); // Pause before deleting
        }
    } else {
        if (currentCharacter > commonLength) {
            dynamicText.textContent = "I am a "+ current.substring(0, currentCharacter - 1);
            currentCharacter--;
            setTimeout(typeEffect, 80); // Deleting speed
        } else {
            isDeleting = false;
            currentPhrase = (currentPhrase + 1) % phrases.length;
            setTimeout(typeEffect, 200); // Delay before typing next phrase
        }
    }
}

function getCommonPrefixLength(str1, str2) {
    let i = 0;
    while (i < str1.length && i < str2.length && str1[i] === str2[i]) {
        i++;
    }
    return i;
}



// Get the Resume and Contact me tabs
const resumeTab = document.getElementById("resume-tab");
const contactTab = document.getElementById("contact-tab");
const portfolioTab = document.getElementById("portfolio-tab");

// Get the content sections
const resumeSection = document.getElementById("resume-section");
const contactSection = document.getElementById("contact-section");
const portfolioSection = document.getElementById("portfolio-section");

// Toggle function to switch between Resume and Contact me tabs
function toggleTabs(selectedTab) {
    if (selectedTab === "resume") {
        resumeTab.classList.add("active");
        contactTab.classList.remove("active");
        portfolioTab.classList.remove("active");
        resumeSection.style.display = "block";
        contactSection.style.display = "none";
        portfolioSection.style.display = "none";
    } else if (selectedTab === "contact") {
        contactTab.classList.add("active");
        resumeTab.classList.remove("active");
        portfolioTab.classList.remove("active");
        contactSection.style.display = "block";
        resumeSection.style.display = "none";
        portfolioSection.style.display = "none";
    } else if (selectedTab === "portfolio") {
        portfolioTab.classList.add("active");
        resumeTab.classList.remove("active");
        contactTab.classList.remove("active");
        // remove active class from other tabs
        portfolioSection.style.display = "block";
        contactSection.style.display = "none";
        resumeSection.style.display = "none";
        // set display none for other sections
    }
}


// Data containing project details
const projects = [
    {
        title: "J.P. Morgan Software Engineering Virtual Experience on Forage",
        description: "I completed the Morgan Software Engineering Virtual Experience on Forage. I successfully set up a local dev environment, fixed broken files, and utilized JPMorgan Chase's Perspective library to generate a live graph for traders to monitor data feeds visually. See the GitHub link above ",
        githubLink: "https://github.com/DJRoche509/forage-jpmc-swe-task-3",
        tableauLink: null,  // Set to null for there's no Tableau link
        thumbnail: "./images/JPMorganProj.png"
    },
    {
        title: "Ma Bagnole",
        description: "This is a sample project that demonstrates how to build a car rental API using Node.js, Express, Sequelize, and PostgreSQL. The API allows users to view a list of available cars, reserve a car, and view their reservations.",
        githubLink: "https://github.com/DJRoche509/maBagnole-Rental",
        tableauLink: null,  // Set to null for there's no Tableau link
        thumbnail: "./images/maBagnole2.png"
    },
    {
        title: "Jottings",
        description: "Jottings is a simple web application built with Flask, allowing users to jot down notes and manage their tasks efficiently. This minimalistic app provides an intuitive interface to add, edit, and delete notes effortlessly. See the GitHub link below.",
        githubLink: "https://github.com/DJRoche509/Jottings",
        tableauLink: null,  // Set to null for there's no Tableau link
        thumbnail: "./images/jottingsapp.png"
    },
    {
        title: "Pre-trained Image Classifier for Dog Breed Identification",
        description: "In this project, I used a pre-trained image classifier implemented in Python, capable of identifying dog breeds using Convolutional Neural Networks (CNNs). Three CNN architectures were used: AlexNet, VGG, and ResNet, each with unique structures and capabilities. This project is part of a Udacity AI program for AWS Scholars who won in final DeepRacer tournaments",
        githubLink: "https://github.com/DJRoche509/Pre-trained-Image-Classifier-to-Identify-Dog-Breeds",
        tableauLink: null,  // Set to null for there's no Tableau link
        thumbnail: "./images/dogBreedClassifier.png"
    },
    {
        title: "2015-US-Flight-Delays-and-Cancellations-Analysis",
        description: "This project explores flight delays and cancellations in the United States for the year 2015. The main story conveyed through the visualization is an analysis of various factors contributing to flight delays and cancellations. The visualization allows viewers to understand the distribution of delays and cancellations across airlines, the reasons for cancellations, and how these factors vary across different months and days of the week.",
        githubLink: "https://github.com/DJRoche509/Pre-trained-Image-Classifier-to-Identify-Dog-Breeds",
        tableauLink: "https://public.tableau.com/views/Flights2015-DelayCancellation/Summary?:language=en-US&publish=yes&:display_count=n&:origin=viz_share_link",
        thumbnail: "./images/2015flightsAnalysis.PNG"
    },
    // Add details for other projects similarly
];

// Function to create project elements
function createProjectElement(project) {
    const projectElement = document.createElement("div");
    projectElement.classList.add("project");

    const thumbnail = document.createElement("img");
    thumbnail.src = project.thumbnail;
    thumbnail.alt = `${project.title} Thumbnail`;

    const details = document.createElement("div");
    details.classList.add("project-details");

    const title = document.createElement("h2");
    title.textContent = project.title;

    // Build truncated description's elements
    const truncatedDesc = document.createElement("p");
    truncatedDesc.classList.add("truncated-description");
    truncatedDesc.textContent = truncateDescription(project.description);

    // Build full description's elements
    const fullDesc = document.createElement("p");
    fullDesc.classList.add("full-description");
    fullDesc.textContent = project.description;
    
    details.appendChild(title);

    // Check if there's a project GitHub link to add
    if (project.githubLink) {
        const githubLink = document.createElement("a");
        githubLink.href = project.githubLink;
        githubLink.textContent = "GitHub Link";
        githubLink.target = "_blank";
        details.appendChild(githubLink);
    }
    
    // Check if there's a project Tableau link to add
    if (project.tableauLink) {
        const tableauLink = document.createElement("a");
        tableauLink.href = project.tableauLink;
        tableauLink.textContent = "Tableau Visualization";
        tableauLink.target = "_blank";
        details.appendChild(tableauLink);
    }
    
    // Append truncated description
    details.appendChild(truncatedDesc);
    // Append full description
    details.appendChild(fullDesc);

    projectElement.appendChild(thumbnail);
    projectElement.appendChild(details);

    
    // Show full description on hover
    projectElement.addEventListener(("touchstart","mouseenter"), () => {
        truncatedDesc.style.display = "none";
        fullDesc.style.display = "block";
    });

    // Hide full description on mouse leave
    projectElement.addEventListener("mouseleave", () => {
        setTimeout(() => {
            truncatedDesc.style.display = "block";
            fullDesc.style.display = "none";
        }, 20000);        
    });

    return projectElement;
}


function truncateDescription(description) {
    const maxLength = 85;
    if (description.length > maxLength) {
        return `${description.slice(0, maxLength)}...`;
    }
    return description;
}


// Function to render projects
function renderProjects() {
    const portfolioSection = document.getElementById("portfolio-section");
    projects.forEach(project => {
        const projectElement = createProjectElement(project);
        portfolioSection.appendChild(projectElement);
    });
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

// Add event listener for Portfolio tab
portfolioTab.addEventListener("click", function (e) {
    e.preventDefault();
    toggleTabs("portfolio");
});

submit.addEventListener('submit', e => {
    e.preventDefault();
    sendMessage();
});

// Call the function to display the projects
renderProjects();

// Initial state: Resume tab is active
toggleTabs("resume");

// Invoke updatePhrase() function
typeEffect();

updateCounter();
