import User from "../models/User.js";
import bcrypt from "bcryptjs";

export const register = async (req, res, next) => {
    try {
        var salt = bcrypt.genSaltSync(10);
        var hash = bcrypt.hashSync(req.body.password, salt);

        const newUser = new User({
            username: req.body.username,
            email: req.body.email,
            password: hash
        })
        await newUser.save();
        res.status(200).send("user has been created");
    } catch (error) {
        next(error)
    }
};



