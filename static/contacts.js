document.addEventListener('DOMContentLoaded', function() {
    // Animate team members with staggered delay
    const teamMembers = document.querySelectorAll('.team-member');
    
    function animateTeamMembers() {
        teamMembers.forEach(member => {
            const delay = parseFloat(member.getAttribute('data-delay')) || 0;
            
            setTimeout(() => {
                member.style.animationDelay = `${delay}s`;
                member.classList.add('active');
            }, 200);
        });
    }
    
    // Animate contact form
    const contactForm = document.querySelector('.contact-form-container');
    
    function animateContactForm() {
        setTimeout(() => {
            contactForm.classList.add('active');
        }, 1000);
    }
    
    // Check if elements are in viewport
    function isInViewport(element) {
        const rect = element.getBoundingClientRect();
        return (
            rect.top <= (window.innerHeight || document.documentElement.clientHeight) * 0.8
        );
    }
    
    // Check on scroll
    function checkScroll() {
        if (isInViewport(document.querySelector('.team-container'))) {
            animateTeamMembers();
        }
        
        if (isInViewport(contactForm)) {
            animateContactForm();
        }
    }
    
    // Initial check
    setTimeout(checkScroll, 300);
    
    // Check on scroll
    window.addEventListener('scroll', checkScroll);
    
    // Form submission
    const form = document.querySelector('.contact-form');
    
    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Here you would normally send the form data to your server
            // For now, we'll just show a success message
            
            const formData = new FormData(form);
            const formValues = {};
            
            formData.forEach((value, key) => {
                formValues[key] = value;
            });
            
            console.log('Form submitted:', formValues);
            
            // Show success message
            form.innerHTML = `
                <div class="success-message">
                    <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#F7C94A" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                        <polyline points="22 4 12 14.01 9 11.01"></polyline>
                    </svg>
                    <h3>Message Sent!</h3>
                    <p>Thank you for reaching out. We'll get back to you soon.</p>
                </div>
            `;
        });
    }
});