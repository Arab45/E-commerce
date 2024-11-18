const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const adminSchema = new Schema({
    googleID: {
        type: String
    },
    fullName: {
        type: String
    },
    email: {
        type: String
    },
    creatAt: {
        type: Date,
        default: Date.now
    }
});


module.exports = mongoose.model("Admin", adminSchema);