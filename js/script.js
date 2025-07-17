// JavaScript for HeaVans Portfolio Website

// DOM Content Loaded
document.addEventListener('DOMContentLoaded', function() {
    // Initialize all functionality
    initializeNavigation();
    initializeFormValidation();
    initializeSmoothScrolling();
    initializeAnimations();
});

// Navigation functionality
function initializeNavigation() {
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const mobileNavOverlay = document.getElementById('mobileNavOverlay');
    const mobileNavClose = document.getElementById('mobileNavClose');
    const mobileNavBackdrop = document.getElementById('mobileNavBackdrop');
    const navLinks = document.querySelectorAll('.nav-link, .mobile-nav-link');
    const navbar = document.getElementById('navbar');

    // Mobile menu toggle
    mobileMenuBtn.addEventListener('click', function() {
        toggleMobileMenu();
    });

    // Close mobile menu
    mobileNavClose.addEventListener('click', function() {
        closeMobileMenu();
    });

    // Close mobile menu when clicking backdrop
    mobileNavBackdrop.addEventListener('click', function() {
        closeMobileMenu();
    });

    // Close mobile menu when clicking on links
    document.querySelectorAll('.mobile-nav-link').forEach(link => {
        link.addEventListener('click', function() {
            closeMobileMenu();
        });
    });

    // Handle navbar scroll effect
    window.addEventListener('scroll', function() {
        if (window.scrollY > 100) {
            navbar.style.background = 'rgba(30, 30, 30, 0.98)';
        } else {
            navbar.style.background = 'rgba(30, 30, 30, 0.95)';
        }
    });

    // Update active nav link based on scroll position
    window.addEventListener('scroll', updateActiveNavLink);
    
    // Initial call to set active link
    updateActiveNavLink();

    function toggleMobileMenu() {
        mobileNavOverlay.classList.add('active');
        mobileNavBackdrop.classList.add('active');
        mobileMenuBtn.classList.add('active');
        document.body.style.overflow = 'hidden';
    }

    function closeMobileMenu() {
        mobileNavOverlay.classList.remove('active');
        mobileNavBackdrop.classList.remove('active');
        mobileMenuBtn.classList.remove('active');
        document.body.style.overflow = '';
    }

    function updateActiveNavLink() {
        const sections = document.querySelectorAll('section[id]');
        const scrollPosition = window.scrollY + 100;

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute('id');

            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                // Remove active class from all links
                navLinks.forEach(link => link.classList.remove('active'));
                
                // Add active class to current section links
                const activeLinks = document.querySelectorAll(`a[href="#${sectionId}"]`);
                activeLinks.forEach(link => link.classList.add('active'));
            }
        });
    }
}

// Form validation and submission
function initializeFormValidation() {
    const contactForm = document.getElementById('contactForm');
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const messageInput = document.getElementById('message');

    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Reset previous errors
        clearErrors();
        
        // Validate form
        let isValid = true;
        
        // Name validation
        if (!nameInput.value.trim()) {
            showError('nameError', 'Name is required');
            nameInput.classList.add('error');
            isValid = false;
        } else if (nameInput.value.trim().length < 2) {
            showError('nameError', 'Name must be at least 2 characters');
            nameInput.classList.add('error');
            isValid = false;
        }
        
        // Email validation
        if (!emailInput.value.trim()) {
            showError('emailError', 'Email is required');
            emailInput.classList.add('error');
            isValid = false;
        } else if (!isValidEmail(emailInput.value.trim())) {
            showError('emailError', 'Please enter a valid email address');
            emailInput.classList.add('error');
            isValid = false;
        }
        
        // Message validation
        if (!messageInput.value.trim()) {
            showError('messageError', 'Message is required');
            messageInput.classList.add('error');
            isValid = false;
        } else if (messageInput.value.trim().length < 10) {
            showError('messageError', 'Message must be at least 10 characters');
            messageInput.classList.add('error');
            isValid = false;
        }
        
        // If form is valid, simulate form submission
        if (isValid) {
            submitForm();
        }
    });

    // Real-time validation
    nameInput.addEventListener('input', function() {
        if (this.classList.contains('error')) {
            this.classList.remove('error');
            document.getElementById('nameError').classList.remove('show');
        }
    });

    emailInput.addEventListener('input', function() {
        if (this.classList.contains('error')) {
            this.classList.remove('error');
            document.getElementById('emailError').classList.remove('show');
        }
    });

    messageInput.addEventListener('input', function() {
        if (this.classList.contains('error')) {
            this.classList.remove('error');
            document.getElementById('messageError').classList.remove('show');
        }
    });

    function showError(errorId, message) {
        const errorElement = document.getElementById(errorId);
        errorElement.textContent = message;
        errorElement.classList.add('show');
    }

    function clearErrors() {
        const errorElements = document.querySelectorAll('.error-message');
        const inputElements = document.querySelectorAll('.form-input, .form-textarea');
        
        errorElements.forEach(element => {
            element.classList.remove('show');
            element.textContent = '';
        });
        
        inputElements.forEach(element => {
            element.classList.remove('error');
        });
    }

    function isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    function submitForm() {
        const submitButton = document.querySelector('.form-submit');
        const originalText = submitButton.textContent;
        
        // Show loading state
        submitButton.textContent = 'Sending...';
        submitButton.disabled = true;
        
        // Simulate form submission (replace with actual submission logic)
        setTimeout(() => {
            // Show success message
            alert('Thank you for your message! I\'ll get back to you soon.');
            
            // Reset form
            contactForm.reset();
            
            // Reset button
            submitButton.textContent = originalText;
            submitButton.disabled = false;
        }, 2000);
    }
}

// Smooth scrolling for navigation links
function initializeSmoothScrolling() {
    const links = document.querySelectorAll('a[href^="#"]');
    
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            
            if (targetElement) {
                const offsetTop = targetElement.offsetTop - 80; // Account for fixed navbar
                
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// Initialize animations and interactions
function initializeAnimations() {
    // Intersection Observer for fade-in animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
            }
        });
    }, observerOptions);

    // Observe elements for animation
    const animateElements = document.querySelectorAll('.experience-card, .contact-info, .contact-form-container');
    animateElements.forEach(element => {
        observer.observe(element);
    });

    // Add mouse move effect to hero section
    const heroSection = document.querySelector('.hero-section');
    const gradientOverlay = document.querySelector('.gradient-overlay');
    
    if (heroSection && gradientOverlay) {
        heroSection.addEventListener('mousemove', function(e) {
            const rect = heroSection.getBoundingClientRect();
            const x = ((e.clientX - rect.left) / rect.width) * 100;
            const y = ((e.clientY - rect.top) / rect.height) * 100;
            
            gradientOverlay.style.background = `
                radial-gradient(circle at ${x}% ${y}%, rgba(0, 123, 255, 0.1) 0%, rgba(0, 0, 0, 0.4) 50%),
                linear-gradient(45deg, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.2))
            `;
        });
    }
}

// Utility functions
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Performance optimization
const debouncedScroll = debounce(() => {
    // Add any scroll-based optimizations here
}, 16); // ~60fps

window.addEventListener('scroll', debouncedScroll);

// Handle keyboard navigation
document.addEventListener('keydown', function(e) {
    // Escape key closes mobile menu
    if (e.key === 'Escape') {
        const mobileNavOverlay = document.getElementById('mobileNavOverlay');
        if (mobileNavOverlay.classList.contains('active')) {
            const mobileNavClose = document.getElementById('mobileNavClose');
            mobileNavClose.click();
        }
    }
});

// Add loading state management
window.addEventListener('load', function() {
    document.body.classList.add('loaded');
});

// Error handling
window.addEventListener('error', function(e) {
    console.error('JavaScript error:', e.error);
});

// Service Worker registration (if available)
if ('serviceWorker' in navigator) {
    window.addEventListener('load', function() {
        navigator.serviceWorker.register('/sw.js')
            .then(function(registration) {
                console.log('ServiceWorker registration successful');
            })
            .catch(function(error) {
                console.log('ServiceWorker registration failed');
            });
    });
}

// Export functions for testing (if needed)
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        initializeNavigation,
        initializeFormValidation,
        initializeSmoothScrolling,
        initializeAnimations
    };
}