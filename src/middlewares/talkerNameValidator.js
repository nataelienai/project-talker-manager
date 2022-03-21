const validateTalkerName = (name) => {
  if (!name) {
    return { error: 'O campo "name" é obrigatório', isValid: true };
  }
  if (name.length < 3) {
    return { error: 'O "name" deve ter pelo menos 3 caracteres', isValid: true };
  }
  return { error: '', isValid: true };
};

const talkerNameValidator = (req, _res, next) => {
  const { name } = req.body;
  const validation = validateTalkerName(name);

  if (!validation.isValid) {
    const error = new Error(validation.error);
    error.status = 400;
    return next(error);
  }
  next();
};

module.exports = talkerNameValidator;
