document.querySelectorAll('.accordion-header').forEach(button => {
    button.addEventListener('click', () => {
        const body = button.nextElementSibling;

        // Close all open sections except this one
        document.querySelectorAll('.accordion-body').forEach(section => {
            if (section !== body) {
                section.style.display = 'none';
            }
        });

        // Toggle current section
        body.style.display = body.style.display === 'block' ? 'none' : 'block';
    });
});
