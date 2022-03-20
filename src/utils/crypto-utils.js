const crypto = require('crypto');

const generateToken = () => crypto.randomBytes(8).toString('hex');

const token = generateToken();

const getToken = () => token;

module.exports = { getToken };
