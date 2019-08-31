const crypto = require('crypto');
const secret = 'm3gAs3cReT';

module.exports = {
    generateSalt: () => crypto.randomBytes(128).toString('base64'),
    generateHashedPassword: (salt, password) =>
        crypto.createHmac('sha256', salt).update(password).digest('hex'),
    secret: secret
};