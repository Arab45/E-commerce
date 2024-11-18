const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const userSchema = new Schema({
    fullName: {
        type: String
    },
    email: {
        type: String
    },
    phone: {
        type: String
    },
    password: {
        type: String,
        default: undefined
    },
    creatAt: {
        type: Date,
        default: new Date()
    }
});

module.exports = mongoose.model('User', userSchema);