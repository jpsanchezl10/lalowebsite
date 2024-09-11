document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('contact-form');
    
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        // Here you would typically send the form data to a server
        alert('Gracias por tu mensaje. Nos pondremos en contacto contigo pronto.');
        form.reset();
    });
});