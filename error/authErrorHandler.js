const handleSubmitError = (err) => {
    let errors = { login: '', password: '' };

    if (err.message.includes('incorrect login')) {
        errors.login = 'that login is not registered';
    }

    if (err.message.includes('incorrect password')) {
        errors.password = 'that password is incorrect';
    }

    if (
        err.message.includes('Validation error') ||
        err.name === 'SequelizeUniqueConstraintError'
    ) {
        Object.values(err.errors).forEach((prop) => {
            errors[prop.path] = prop.message;
        });
    }
    return errors;
};

module.exports = handleSubmitError;
