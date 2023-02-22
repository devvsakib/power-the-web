const bcrypt = require('bcrypt');

const common = {};
common.passwordEncrpt = async function (password) {
    const passencrpt = await bcrypt.genSalt(10);
    return await bcrypt.hash(password, passencrpt)
}
common.passwordValid = async function (password,passwordDB) {
    return await bcrypt.compare(password, passwordDB);
}

module.exports = common;