const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
require ('dotenv').config();

const authUtils = {}

authUtils.compareHash = (password, hash) => {
    const compare = bcrypt.compare(password, hash).then(result => {
        return result
    }).catch(error => {
        throw error
    });

    return compare;
}

authUtils.generateToken = (id, name, email) => {
    const token = jwt.sign({
        id,
        name, 
        email,
        access: process.env.JWT_ACCESS
    }, process.env.JWT_SECRET, {
        expiresIn: 60 * 60 * 24 * 30
    });

    return token;
}

module.exports = {authUtils};