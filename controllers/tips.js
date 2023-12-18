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

export const updateTip = async (req, res, next) => {
    try {
        const updatedTip = await Tip.findByIdAndUpdate(
            req.params.id,
            { $set: req.body },
            { new: true }
        );
        res.status(200).json(updatedTip);
    } catch (error) {
        next(error)
    }
};

export const deleteTip = async (req, res, next) => {
    try {
        await Tip.findByIdAndDelete(
            req.params.id,
        );
        res.status(200).json("Tip has been deleted");
    } catch (error) {
        next(error)
    }
};

export const getTip = async (req, res, next) => {
    try {
        const tip = await Tip.findById(
            req.params.id,
        );
        res.status(200).json(tip);
    } catch (error) {
        next(error)
    }
};

export const getTipsByCategory = async (req, res, next) => {
    try {
        const { category } = req.query;
        
        const filter = category ? { category } : {};

        const tips = await Tip.find(filter);
        res.status(200).json(tips);
    } catch (error) {
        next(error);
    }
};

export const getTips = async (req, res, next) => {
    try {
        const tips = await Tip.find();
        res.status(200).json(tips);
    } catch (error) {
        next(error)
    }
};

