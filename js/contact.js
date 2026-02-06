document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('contact-form');
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const subjectInput = document.getElementById('subject');
    const messageInput = document.getElementById('message');

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        if (validateForm()) {
            // Simulate form submission
            const btn = form.querySelector('button');
            const originalText = btn.innerText;

            btn.innerText = 'Sending...';
            btn.disabled = true;

            setTimeout(() => {
                btn.innerText = 'Message Sent!';
                btn.style.background = '#4ade80';

                // Reset form
                form.reset();
                document.querySelectorAll('.form-group').forEach(group => {
                    group.classList.remove('success');
                });

                setTimeout(() => {
                    btn.innerText = originalText;
                    btn.style.background = '';
                    btn.disabled = false;
                }, 3000);
            }, 1500);
        }
    });

    function validateForm() {
        let isValid = true;

        if (!validateField(nameInput, nameInput.value.trim() !== '')) {
            isValid = false;
        }

        if (!validateField(emailInput, isValidEmail(emailInput.value.trim()))) {
            isValid = false;
        }

        if (!validateField(subjectInput, subjectInput.value !== '')) {
            isValid = false;
        }

        if (!validateField(messageInput, messageInput.value.trim() !== '')) {
            isValid = false;
        }

        return isValid;
    }

    function validateField(input, condition) {
        const parent = input.parentElement;
        if (condition) {
            parent.classList.remove('error');
            parent.classList.add('success');
            return true;
        } else {
            parent.classList.remove('success');
            parent.classList.add('error');
            return false;
        }
    }

    function isValidEmail(email) {
        const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    }

    // Real-time validation
    const inputs = [nameInput, emailInput, subjectInput, messageInput];
    inputs.forEach(input => {
        input.addEventListener('input', () => {
            if (input.parentElement.classList.contains('error')) {
                if (input === emailInput) {
                    validateField(input, isValidEmail(input.value.trim()));
                } else {
                    validateField(input, input.value.trim() !== '');
                }
            }
        });
    });
});