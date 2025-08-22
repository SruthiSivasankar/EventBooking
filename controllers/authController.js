const User = require("../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

exports.register = async (req, res) => {
    const { firstName, lastName, username, password, gender, phone, email } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    try {
        const user = await User.create({ firstName, lastName, username, password: hashedPassword, gender, phone, email });
        res.json({message: "User registered successfully", user});
    } catch (error) {
        res.status(400).json({error: error.message});
    }
};

exports.login = async (req, res) => {
    const {username, password} = req.body;
    const user = await User.findOne({where: {username}});
    if (!user || !(await bcrypt.compare(password, user.password))){
        return res.status(401).json({message:"Invalid credentials"});
    }
    const token = jwt.sign({ userId: user.id }, "secret_key",{
        expiresIn: "1h"
    });
    res.json({message: "Logged in successfully!", token});
};


exports.logout = (req, res) => {
    res.json({message: "Logged out successfully"});
};