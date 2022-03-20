const { getToken } = require('../utils/crypto-utils');

const signIn = (_req, res) => {
  res.status(200).json({ token: getToken() });
};

module.exports = { signIn };
