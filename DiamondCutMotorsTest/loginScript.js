function validateForm() {
    const username = document.getElementById('username').value.trim();
    const email = document.getElementById('email').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const password = document.getElementById('password').value;
    const agreeTerms = document.getElementById('agreeTerms').checked;

   
    const errorElements = document.querySelectorAll('.error');
    errorElements.forEach(element => {
        element.textContent = '';
    });

    let valid = true;

    if (username === '') {
        document.getElementById('usernameError').textContent = 'Username is required';
        valid = false;
    }

    if (email === '') {
        document.getElementById('emailError').textContent = 'Email is required';
        valid = false;
    }

    if (phone === '') {
        document.getElementById('phoneError').textContent = 'Phone number is required';
        valid = false;
    }

    if (password === '') {
        document.getElementById('passwordError').textContent = 'Password is required';
        valid = false;
    }

    if (!agreeTerms) {
        document.getElementById('agreeTermsError').textContent = 'You must agree to the terms and services';
        valid = false;
    }

    if (valid) {
        
        localStorage.setItem('username', username);
        localStorage.setItem('email', email);
        localStorage.setItem('phone', phone);

        // Redirect to home page
        window.location.href = 'index.html';
    }

    return false; 
}
