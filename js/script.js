// Smooth Scrolling for Navigation Links
const navLinks = document.querySelectorAll('.navbar-nav .nav-link');

// Event Listener for each navigation link to enable smooth scrolling
navLinks.forEach(link => {
    link.addEventListener('click', function(event) {
        event.preventDefault();
        
        // Check if the href is pointing to an internal section (not an external URL)
        const targetHref = this.getAttribute('href');
        
        // Check if it's an internal link (starts with '#')
        if (targetHref.startsWith('#')) {
            // Get the target section's ID (without the '#')
            const targetId = targetHref.substring(1);
            const targetElement = document.getElementById(targetId);
            
            // Ensure the element exists before trying to scroll
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 50, // Adjusted for fixed navbar height
                    behavior: 'smooth'
                });
            } else {
                console.error(`Element with ID "${targetId}" not found.`);
            }
        } else {
            // If it's not an internal link (like the "Download CV" link), let the browser handle it as usual
            window.location.href = targetHref;
        }
    });
});

// Add event listener to the form submission
document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent the form from refreshing the page

    // Get form input values
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let message = document.getElementById("message").value;

    // Simple form validation: Check if any field is empty
    if (name === "" || email === "" || message === "") {
        alert("Please fill out all fields.");
        return;
    }

    // Email parameters
    let emailAddress = "fwaseem693@gmail.com"; // Your email address
    let subject = `New Contact from ${name}`;
    let body = `Name: ${name}%0D%0AEmail: ${email}%0D%0A%0D%0AMessage:%0D%0A${message}`;
    
    // Trigger the mail client with the pre-filled email details
    window.location.href = `mailto:${emailAddress}?subject=${subject}&body=${body}`;
});

// Scroll to Top Button
const scrollTopButton = document.createElement('button');
scrollTopButton.innerText = '↑';
scrollTopButton.classList.add('scroll-top-btn');
document.body.appendChild(scrollTopButton);

// Show or hide the scroll-to-top button based on scroll position
window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        scrollTopButton.classList.add('visible');
    } else {
        scrollTopButton.classList.remove('visible');
    }
});

// Scroll to the top when the Scroll-to-Top button is clicked
scrollTopButton.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Image Lazy Loading for Performance Optimization
const lazyImages = document.querySelectorAll('img[data-src]');

// Load images lazily as they come into view
const imageObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const image = entry.target;
            image.src = image.getAttribute('data-src');
            image.removeAttribute('data-src'); // Once loaded, remove the 'data-src' attribute
            observer.unobserve(image); // Stop observing the image after loading
        }
    });
}, { threshold: 0.5 });

// Observe all lazy-load images
lazyImages.forEach(image => {
    imageObserver.observe(image);
});

// Mobile Navigation Toggle
const mobileNavToggle = document.querySelector('.navbar-toggler');
const navbarCollapse = document.querySelector('.navbar-collapse');

// Toggle mobile navigation menu visibility
mobileNavToggle.addEventListener('click', () => {
    navbarCollapse.classList.toggle('show');
});
