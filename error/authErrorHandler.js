const handleError = (err) => {
    let errors = { username: '', password: '' };

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

module.exports = handleError;
