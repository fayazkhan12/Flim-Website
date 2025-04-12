// Theme Toggle Functionality
const themeToggleBtn = document.getElementById('theme-toggle-btn');
const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');

// Check for saved theme preference or use system preference
const currentTheme = localStorage.getItem('theme') || 
                     (prefersDarkScheme.matches ? 'dark' : 'light');
document.body.classList.toggle('light-theme', currentTheme === 'light');

// Update button icon based on current theme
updateThemeIcon(currentTheme);

// Theme toggle button click event
themeToggleBtn.addEventListener('click', () => {
    const isLight = document.body.classList.toggle('light-theme');
    const theme = isLight ? 'light' : 'dark';
    localStorage.setItem('theme', theme);
    updateThemeIcon(theme);
});

// Function to update the theme icon visibility
function updateThemeIcon(theme) {
    const sunIcon = themeToggleBtn.querySelector('.fa-sun');
    const moonIcon = themeToggleBtn.querySelector('.fa-moon');
    
    if (theme === 'light') {
        sunIcon.style.opacity = '1';
        moonIcon.style.opacity = '0';
    } else {
        sunIcon.style.opacity = '0';
        moonIcon.style.opacity = '1';
    }
}





// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Form submission handling
document.getElementById('contact-form').addEventListener('submit', function (e) {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Simulate form submission (you can replace this with actual AJAX request)
    console.log(`Name: ${name}, Email: ${email}, Message: ${message}`);
    alert('Thank you for contacting us! We will get back to you soon.');
    document.getElementById('contact-form').reset();
});

// Contact Form Submission
document.getElementById('contact-form').addEventListener('submit', function (e) {
    e.preventDefault();

    // Get form data
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Prepare data for submission
    const formData = {
        name: name,
        email: email,
        message: message
    };

    // Replace with your Google Apps Script URL
    const scriptURL = 'https://outlook.office.com/mail/oauthRedirect.html?app=native&state=Y29ycmVsYXRpb25faWQ9MzhjZGEwMTctY2VjYy1kYzc5LWQ1ZTktMTU5NjgwNjU0MjBjJmxvZ2luX2hpbnQ9a2hhbm9mZmljaWFsNzM4OUBnbWFpbC5jb20mdHlwZV9oaW50PUdvb2dsZSZpbnN0YW5jZV9pZD0x&code=4/0AQSTgQFEbelCiYxo72byeAJ8svKKH8JLMvPrSTp8Bs5Cp5HSWem_zrjWQiR51qqoJl5-dA&scope=email%20profile%20https://mail.google.com/%20https://www.googleapis.com/auth/drive%20https://www.googleapis.com/auth/drive.file%20https://www.googleapis.com/auth/contacts%20https://www.googleapis.com/auth/calendar%20https://www.googleapis.com/auth/user.birthday.read%20openid%20https://www.googleapis.com/auth/userinfo.profile%20https://www.googleapis.com/auth/userinfo.email&authuser=0&prompt=consent';

    // Send data to Google Sheets
    fetch(scriptURL, {
        method: 'POST',
        body: JSON.stringify(formData),
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then(response => response.text())
    .then(data => {
        document.getElementById('form-response').innerText = "Thank you! Your message has been sent.";
        document.getElementById('contact-form').reset();
    })
    .catch(error => {
        document.getElementById('form-response').innerText = "Oops! Something went wrong. Please try again.";
    });



    // Typewriter effect for tagline (optional)
function typeWriter() {
    const tagline = document.querySelector('.tagline');
    const text = tagline.textContent;
    tagline.textContent = '';
    let i = 0;
    
    function typing() {
        if (i < text.length) {
            tagline.textContent += text.charAt(i);
            i++;
            setTimeout(typing, 50);
        }
    }
    typing();
}

// Initialize when hero section is visible
document.addEventListener('DOMContentLoaded', function() {
    const observer = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting) {
            typeWriter();
        }
    }, { threshold: 0.5 });

    observer.observe(document.querySelector('.hero'));



});



});


