const jwt = require('jsonwebtoken');
const User = require("../models/userModel");

const signToken = (id) => jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRES_IN
})

exports.register = async (req, res, next) => {
    try {
        const newUser = await User.create(req.body);
        const token = signToken(newUser._id);

        res.status(201).json({
            status: "success",
            token,
            data: {
                user: newUser
            }
        })
    }
    catch (err) {
        console.log(err)
        res.status(401).json({ message: err })
    }
}

exports.login = async (req, res, next) => {
    try {
        const { email, password } = req.body;

        if (!email || !password) {
            throw new Error('Email yada Passord bulunamadi');
        }
        const user = await User.findOne({ email }).select('+password');
        if (!user || !(await user.correctPassword(password, user.password))) {
            throw new Error('Incorrect email or password');
        }

        const token = signToken(user._id);

        res.status(200).json({
            status: "success",
            token
        })
    }
    catch (err) {
        console.log(err)
        res.status(401).json({ message: err })
    }
}