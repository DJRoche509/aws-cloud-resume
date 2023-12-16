// Visitor Counter
const counter = document.getElementById("visitor-count");
async function updateCounter() {
    let response = await fetch("https://bd3nqxp3kyfxqqxehujwnkdjym0wfsgw.lambda-url.us-east-2.on.aws/"); //("https://in3e4ogyqefn6n4cik3mwpuxb40jglxp.lambda-url.us-east-2.on.aws/") with Terraform ;
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

// Initial state: Resume tab is active
toggleTabs("resume");

// Invoke updatePhrase() function
typeEffect();

updateCounter();
