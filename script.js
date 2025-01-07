document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('newsletterForm');
    const successMessage = document.getElementById('successMessage');

    form.addEventListener('submit', function(e) {
        e.preventDefault();

        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;

        // Here you would typically send the data to your server
        // For this example, we'll just simulate a successful submission
        console.log('Submitted:', { name, email });

        // Hide the form and show the success message
        form.style.display = 'none';
        successMessage.classList.remove('hidden');
    });
});
