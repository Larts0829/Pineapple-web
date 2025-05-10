/**
 * RipenScan - Main JavaScript
 * Handles animations, mobile menu, and other interactive elements
 */

document.addEventListener("DOMContentLoaded", () => {
  // Initialize animations with a slight delay
  setTimeout(initializeAnimations, 100)

  // Initialize mobile menu
  initializeMobileMenu()

  // Handle window resize events
  handleWindowResize()
})

/**
 * Initialize animations for elements with fade-in class
 */
function initializeAnimations() {
  const animatedElements = document.querySelectorAll(".fade-in, .slide-in-up")

  animatedElements.forEach((element, index) => {
    // Calculate staggered delay based on index and any data-delay attribute
    const dataDelay = element.getAttribute("data-delay") || 0
    const staggerDelay = 0.15 * index
    const totalDelay = Number.parseFloat(dataDelay) + staggerDelay

    // Apply the delay and add active class
    setTimeout(() => {
      element.style.transitionDelay = `${totalDelay}s`
      element.classList.add("active")
    }, 50)
  })
}

/**
 * Initialize mobile menu functionality
 */
function initializeMobileMenu() {
  const menuButton = document.getElementById("menuButton")
  const mobileNav = document.getElementById("mobileNav")

  if (!menuButton || !mobileNav) return

  // Toggle mobile menu when button is clicked
  menuButton.addEventListener("click", () => {
    mobileNav.classList.toggle("active")

    // Change menu button to X when menu is open
    const isOpen = mobileNav.classList.contains("active")

    if (isOpen) {
      menuButton.innerHTML = `
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <line x1="18" y1="6" x2="6" y2="18"></line>
          <line x1="6" y1="6" x2="18" y2="18"></line>
        </svg>
      `
    } else {
      menuButton.innerHTML = `
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <line x1="3" y1="12" x2="21" y2="12"></line>
          <line x1="3" y1="6" x2="21" y2="6"></line>
          <line x1="3" y1="18" x2="21" y2="18"></line>
        </svg>
      `
    }

    // Prevent body scrolling when menu is open
    document.body.style.overflow = isOpen ? "hidden" : ""
  })

  // Close mobile menu when a link is clicked
  const mobileNavLinks = mobileNav.querySelectorAll("a")
  mobileNavLinks.forEach((link) => {
    link.addEventListener("click", () => {
      mobileNav.classList.remove("active")
      updateMenuButtonIcon(menuButton, false)
      document.body.style.overflow = ""
    })
  })
}

/**
 * Update menu button icon based on menu state
 */
function updateMenuButtonIcon(button, isOpen) {
  if (isOpen) {
    button.innerHTML = `
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <line x1="18" y1="6" x2="6" y2="18"></line>
        <line x1="6" y1="6" x2="18" y2="18"></line>
      </svg>
    `
  } else {
    button.innerHTML = `
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <line x1="3" y1="12" x2="21" y2="12"></line>
        <line x1="3" y1="6" x2="21" y2="6"></line>
        <line x1="3" y1="18" x2="21" y2="18"></line>
      </svg>
    `
  }
}

/**
 * Handle window resize events
 */
function handleWindowResize() {
  window.addEventListener("resize", () => {
    const menuButton = document.getElementById("menuButton")
    const mobileNav = document.getElementById("mobileNav")

    if (!menuButton || !mobileNav) return

    // Close mobile menu when window is resized to desktop size
    if (window.innerWidth >= 768 && mobileNav.classList.contains("active")) {
      mobileNav.classList.remove("active")
      updateMenuButtonIcon(menuButton, false)
      document.body.style.overflow = ""
    }
  })
}

/**
 * Detect when elements enter the viewport and trigger animations
 */
function initializeScrollAnimations() {
  const observerOptions = {
    root: null,
    rootMargin: "0px",
    threshold: 0.1,
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("active")
        observer.unobserve(entry.target)
      }
    })
  }, observerOptions)

  // Observe all elements with animation classes
  const animatedElements = document.querySelectorAll(".fade-in:not(.active), .slide-in-up:not(.active)")
  animatedElements.forEach((element) => {
    observer.observe(element)
  })
}

// Initialize scroll animations after initial animations
setTimeout(initializeScrollAnimations, 1000)
