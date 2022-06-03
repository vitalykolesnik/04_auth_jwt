const form = document.querySelector('form');
const loginError = document.querySelector('.login.error');
const passwordError = document.querySelector('.password.error');

form.addEventListener('submit', async (e) => {
    e.preventDefault();
    loginError.textContent = '';
    passwordError.textContent = '';

    const user = {
        login: form.login.value,
        password: form.password.value,
    };

    try {
        const res = await fetch('/login', {
            headers: {
                'Content-Type': 'application/json',
            },
            method: 'POST',
            body: JSON.stringify(user),
        });

        const data = await res.json();
        console.log('Recive data: ' + data.message, data.user);

        if (data.message) {
            if (data.message.includes('login')) {
                loginError.textContent = data.message;
            } else if (data.message.includes('password')) {
                passwordError.textContent = data.message;
            }
        }

        if (data.user) {
            location.assign('/');
        }
    } catch (err) {
        console.log(err);
    }
});
