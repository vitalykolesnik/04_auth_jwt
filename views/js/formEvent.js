const form = document.querySelector('form');

form.addEventListener('submit', function (e) {
    e.preventDefault();
    const username = form.username.value;
    const password = form.password.value;
    console.log(username, password);
    form.username.value = 'Ok';
});
