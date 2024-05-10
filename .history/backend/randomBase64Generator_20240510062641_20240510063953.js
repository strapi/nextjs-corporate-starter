const crypto = require('crypto');

const salt = crypto.randomBytes(16).toString('base64');
console.log(salt);
