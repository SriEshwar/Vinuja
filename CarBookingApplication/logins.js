const form = document.getElementById('form');
const username = document.getElementById('username');
const password = document.getElementById('password');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    validateInput();
});

function validateInput() {
    const usernameVal = username.value.trim();
    const passwordVal = password.value.trim();

    if (usernameVal === '') {
        setError(username, 'Username is required');
    } else {
        setSuccess(username);
    }

    if (passwordVal === '') {
        setError(password, 'Password is required');
    } else if (passwordVal.length < 8) {
        setError(password, 'Password must be at least 8 characters');
    } else {
        setSuccess(password);
    }
}

function setError(element, message) {
    const inputGroup = element.parentElement;
    const errorElement = inputGroup.querySelector('.error');

    errorElement.innerText = message;
    inputGroup.classList.add('error');
    inputGroup.classList.remove('success');
}

function setSuccess(element) {
    const inputGroup = element.parentElement;
    const errorElement = inputGroup.querySelector('.error');

    errorElement.innerText = '';
    inputGroup.classList.add('success');
    inputGroup.classList.remove('error');
}
