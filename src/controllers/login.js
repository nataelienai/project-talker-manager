const { generateToken } = require('../utils/token-utils');

const token = generateToken();

const signIn = (_req, res) => {
  res.status(200).json({ token });
};

module.exports = { signIn };
