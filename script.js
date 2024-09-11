document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('contact-form');
    
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        // Here you would typically send the form data to a server
        alert('Thank you for your message. We will get back to you soon.');
        form.reset();
    });

    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Parallax effect for hero section
    window.addEventListener('scroll', () => {
        const heroImage = document.querySelector('.hero-image img');
        const scrollPosition = window.pageYOffset;
        heroImage.style.transform = `translateY(${scrollPosition * 0.5}px)`;
    });

    // Fade in gallery items on scroll
    const galleryItems = document.querySelectorAll('.gallery-item');
    const fadeInOptions = {
        threshold: 0.1,
        rootMargin: "0px 0px -100px 0px"
    };

    const fadeInObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = 1;
                entry.target.style.transform = 'translateY(0)';
                observer.unobserve(entry.target);
            }
        });
    }, fadeInOptions);

    galleryItems.forEach(item => {
        item.style.opacity = 0;
        item.style.transform = 'translateY(50px)';
        item.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
        fadeInObserver.observe(item);
    });
});