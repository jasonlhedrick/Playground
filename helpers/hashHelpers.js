const bcrypt = require('bcrypt');

async function hashPass(pass) {
    return bcrypt.hash(pass, 15);
}

async function compareHash(pass, hash) {
    return bcrypt.compare(pass, hash);
}

module.exports = {
    hashPass,
    compareHash
}