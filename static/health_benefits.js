document.addEventListener('DOMContentLoaded', function() {
    // Trigger pop-in animations for benefit items
    const benefitItems = document.querySelectorAll('.benefit-item');
    
    function animateBenefits() {
        benefitItems.forEach(item => {
            const delay = parseFloat(item.getAttribute('data-delay')) || 0;
            
            setTimeout(() => {
                item.style.animationDelay = `${delay}s`;
                item.classList.add('active');
            }, 200);
        });
    }
    
    // Trigger fade-in animation for additional info
    const additionalInfo = document.querySelector('.additional-info');
    
    function animateAdditionalInfo() {
        setTimeout(() => {
            additionalInfo.classList.add('active');
        }, 1500);
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
        if (isInViewport(document.querySelector('.benefits-container'))) {
            animateBenefits();
            window.removeEventListener('scroll', checkScroll);
        }
        
        if (isInViewport(additionalInfo)) {
            animateAdditionalInfo();
        }
    }
    
    // Initial check
    checkScroll();
    
    // Check on scroll
    window.addEventListener('scroll', checkScroll);
});