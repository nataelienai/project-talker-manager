const { getToken } = require('../utils/crypto-utils');

const authenticateToken = (givenToken) => {
  const token = getToken();

  if (!givenToken) {
    return { error: 'Token não encontrado', isValid: false };
  }
  if (givenToken !== token) {
    return { error: 'Token inválido', isValid: false };
  }
  return { error: '', isValid: true };
};

const tokenAuthenticator = (req, _res, next) => {
  const token = req.headers.authorization;
  const authentication = authenticateToken(token);

  if (!authentication.isValid) {
    const error = new Error(authentication.error);
    error.status = 401;
    return next(error);
  }
  next();
};

module.exports = tokenAuthenticator;
