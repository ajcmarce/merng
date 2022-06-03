const { AuthenticationError } = require("apollo-server");
const jwt = require("jsonwebtoken");

const { SECRET_KEY } = require("../config");

module.exports = (context) => {
    // constext = { ... headers }
    const authHeader = context.req.header.authorization;
    if (authHeader) {
        //Berarer ....
        const token = authHeader.split("Bearer ")[1];
        if (token) {
            try {
            const user = jwt.verify(token, SECRET_KEY);
            return user
            } catch (err) {
                throw new AuthenticationError('Invalid / Expired Token');
            }
        }
        throw new Error('Authentication Token must be \'Bearer <Token>\'');
    }
    throw new Error('Authentication Header must be provided');
}