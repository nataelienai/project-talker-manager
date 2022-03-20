const { generateToken } = require('../utils/crypto-utils');

const token = generateToken();

const signIn = (_req, res) => {
  res.status(200).json({ token });
};

module.exports = { signIn };
