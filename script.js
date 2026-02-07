// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const offset = 80; // Account for fixed navbar
            const targetPosition = target.offsetTop - offset;
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// Form submission handler
const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const submitButton = contactForm.querySelector('.btn-submit');
        const originalButtonText = submitButton.textContent;
        
        // Add submitting class to form
        contactForm.classList.add('submitting');
        
        // Disable button and show loading state
        submitButton.disabled = true;
        submitButton.textContent = '⏳ Отправка...';
        
        // Get form data
        const formData = new FormData(contactForm);
        const userName = formData.get('name');
        const userEmail = formData.get('email');
        
        // Send to Formspree
        fetch('https://formspree.io/f/xbdajkqz', {
            method: 'POST',
            body: formData,
            headers: {
                'Accept': 'application/json'
            }
        })
        .then(response => {
            if (response.ok) {
                // Create success message
                const successMessage = document.createElement('div');
                successMessage.className = 'success-message show';
                successMessage.textContent = 'Сообщение успешно отправлено. Спасибо за ваш интерес.';
                
                // Remove any existing messages
                const existingMessages = contactForm.parentNode.querySelectorAll('.success-message, .error-message');
                existingMessages.forEach(msg => msg.remove());
                
                // Add after form (not inside it)
                contactForm.parentNode.insertBefore(successMessage, contactForm.nextSibling);
                
                // Reset form
                contactForm.reset();
                
                // Remove success message after 10 seconds
                setTimeout(() => {
                    successMessage.classList.remove('show');
                    setTimeout(() => {
                        successMessage.remove();
                    }, 300);
                }, 10000);
            } else {
                throw new Error('Form submission failed');
            }
        })
        .catch(error => {
            // Create error message
            const errorMessage = document.createElement('div');
            errorMessage.className = 'error-message show';
            errorMessage.innerHTML = 'Ошибка отправки. Попробуйте еще раз или напишите на <a href="mailto:anna.sebedash@gmail.com">anna.sebedash@gmail.com</a>';
            
            // Remove any existing messages
            const existingMessages = contactForm.parentNode.querySelectorAll('.success-message, .error-message');
            existingMessages.forEach(msg => msg.remove());
            
            // Add after form (not inside it)
            contactForm.parentNode.insertBefore(errorMessage, contactForm.nextSibling);
            
            // Remove error message after 10 seconds
            setTimeout(() => {
                errorMessage.classList.remove('show');
                setTimeout(() => {
                    errorMessage.remove();
                }, 300);
            }, 10000);
            
            console.error('Form submission error:', error);
        })
        .finally(() => {
            // Remove submitting class from form
            contactForm.classList.remove('submitting');
            
            // Re-enable button
            submitButton.disabled = false;
            submitButton.textContent = originalButtonText;
        });
    });
}

// Animate progress bars when they come into view
const observerOptions = {
    threshold: 0.5,
    rootMargin: '0px 0px -100px 0px'
};

const progressObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const progressBars = entry.target.querySelectorAll('.progress-fill');
            progressBars.forEach(bar => {
                const width = bar.style.width;
                bar.style.width = '0%';
                setTimeout(() => {
                    bar.style.width = width;
                }, 100);
            });
            progressObserver.unobserve(entry.target);
        }
    });
}, observerOptions);

const progressSection = document.querySelector('.progress-example');
if (progressSection) {
    progressObserver.observe(progressSection.parentElement);
}

// Add active state to navigation based on scroll position
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section[id]');
    const scrollY = window.pageYOffset;
    
    sections.forEach(section => {
        const sectionHeight = section.offsetHeight;
        const sectionTop = section.offsetTop - 100;
        const sectionId = section.getAttribute('id');
        const navLink = document.querySelector(`.nav-menu a[href="#${sectionId}"]`);
        
        if (navLink && scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document.querySelectorAll('.nav-menu a').forEach(link => {
                link.style.color = '';
            });
            navLink.style.color = '#1e293b';
        }
    });
});

// Add fade-in animation on scroll for cards
const cardObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '0';
            entry.target.style.transform = 'translateY(20px)';
            entry.target.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
            
            setTimeout(() => {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }, 100);
            
            cardObserver.unobserve(entry.target);
        }
    });
}, {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
});

// Observe all cards for animation
document.querySelectorAll('.about-card, .language-card, .material-card, .pricing-card').forEach(card => {
    cardObserver.observe(card);
});
