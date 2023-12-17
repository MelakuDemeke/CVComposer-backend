import Tip from "../models/Tip.js";

export const createTip = async (req, res, next) => {
    const newTip = new Tip(req.body);
    try {
        const savedTip = await newTip.save();
        res.status(200).json(savedTip);
    } catch (error) {
        next(error)
    }
};