const dotenv = require("dotenv");
const jwt = require("jsonwebtoken");

dotenv.config();

const encodeTokenJwt = (user) => {
    return jwt.sign(user, process.env.TOKEN_SECRET, {expiresIn: '12h'});
};

const checkTokenJwt = (token) => {
    return jwt.verify(token, process.env.TOKEN_SECRET);
};

module.exports = {encodeTokenJwt, checkTokenJwt};