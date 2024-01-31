const mongoose = require('mongoose');
var validator = require('validator');
const bcrypt = require('bcryptjs');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Please type your name!']
    },
    surname: {
        type: String,
        required: [true, 'Please type your surname!']
    },
    email: {
        type: String,
        required: [true, 'Please type your email'],
        unique: true,
        lowercase: true,
        validate: [validator.isEmail, 'Please type a valid email']
    },
    password: {
        type: String,
        required: [true, 'Please type a passsword!'],
        minLength: 8,
        select: false,
    },
    passwordConfirm: {
        type: String,
        required: [true, 'Please type a correct password'],
        validate: {
            validator: function (el) {
                return el === this.password
            },
            message: 'Passwords are not the same!'
        }
    },
})

userSchema.pre('save', async function (next) {
    if (!this.isModified('password')) return next();

    this.password = await bcrypt.hash(this.password, 12);
    this.passwordConfirm = undefined;

    next();
})

userSchema.methods.correctPassword = async function (password, userPassword) {
    return await bcrypt.compare(password, userPassword);
}

const User = mongoose.model('User', userSchema);
module.exports = User;