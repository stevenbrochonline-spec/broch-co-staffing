// Contact form
const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        const feedback = document.getElementById('contactFeedback');
        const formData = new FormData(contactForm);
        const data = Object.fromEntries(formData.entries());

        try {
            const res = await fetch('/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(data)
            });
            const result = await res.json();
            if (result.success) {
                feedback.textContent = result.message;
                feedback.className = 'form-feedback success';
                contactForm.reset();
            } else {
                feedback.textContent = result.errors ? result.errors.map(e => e.msg).join(', ') : 'Please check your input.';
                feedback.className = 'form-feedback error';
            }
        } catch {
            feedback.textContent = 'Connection error. Please try again.';
            feedback.className = 'form-feedback error';
        }
    });
}

// Booking form
const bookingForm = document.getElementById('bookingForm');
if (bookingForm) {
    // Set min date to today
    const dateInput = document.getElementById('preferred_date');
    if (dateInput) {
        dateInput.min = new Date().toISOString().split('T')[0];
    }

    bookingForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        const feedback = document.getElementById('bookingFeedback');
        const formData = new FormData(bookingForm);
        const data = Object.fromEntries(formData.entries());

        try {
            const res = await fetch('/api/book', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(data)
            });
            const result = await res.json();
            if (result.success) {
                feedback.textContent = result.message;
                feedback.className = 'form-feedback success';
                bookingForm.reset();
            } else {
                feedback.textContent = result.errors ? result.errors.map(e => e.msg).join(', ') : 'Please check your input.';
                feedback.className = 'form-feedback error';
            }
        } catch {
            feedback.textContent = 'Connection error. Please try again.';
            feedback.className = 'form-feedback error';
        }
    });
}
