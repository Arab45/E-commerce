const { sendSuccess, sendError } = require('../middleware');
const User = require('../models/User');
const bcrypt = require('bcryptjs');


const signUp = async (req, res) => {
    const { fullName, email, phone, password } = req.body;

    const salt = bcrypt.genSaltSync(10);
    const hashPassword = bcrypt.hashSync(password, salt);
    const emailToLoweCase = req.body.email.toLowerCase();

    const newUser = new User({
        fullName,
        email: emailToLoweCase,
        phone,
        password: hashPassword
    })

    try {
        const userData = await newUser.save();
        return sendSuccess(res, 'successfully signup', userData);
    } catch (error) {
    return sendError(res, 'something went wrong', error);
    }

};

module.exports = {
    signUp
}