const validateTalkerAge = (age) => {
  if (!age) {
    return { error: 'O campo "age" é obrigatório', isValid: false };
  }
  if (age < 18) {
    return { error: 'A pessoa palestrante deve ser maior de idade', isValid: false };
  }
  return { error: '', isValid: true };
};

const talkerAgeValidator = (req, _res, next) => {
  const { age } = req.body;
  const validation = validateTalkerAge(age);

  if (!validation.isValid) {
    const error = new Error(validation.error);
    error.status = 400;
    return next(error);
  }
  next();
};

module.exports = talkerAgeValidator;
