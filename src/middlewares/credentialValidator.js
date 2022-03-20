const validateCredentials = ({ email, password }) => {
  const emailRegex = /^[\w-.]+@([\w-]+\.)+[\w-]{2,}$/i;

  if (!email) {
    return { error: 'O campo "email" é obrigatório', isValid: false };
  }
  if (!emailRegex.test(email)) {
    return { error: 'O "email" deve ter o formato "email@email.com"', isValid: false };
  }
  if (!password) {
    return { error: 'O campo "password" é obrigatório', isValid: false };
  }
  if (password.length < 6) {
    return { error: 'O "password" deve ter pelo menos 6 caracteres', isValid: false };
  }
  return { error: '', isValid: true };
};

const credentialValidator = (req, _res, next) => {
  const { email, password } = req.body;
  const validation = validateCredentials({ email, password });

  if (!validation.isValid) {
    const error = new Error(validation.error);
    error.status = 400;
    return next(error);
  }
  next();
};

module.exports = credentialValidator;
