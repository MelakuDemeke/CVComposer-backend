import express from "express";
import { verifyAdmin } from "../utils/verifyToken.js";
import {
    createTip,
    updateTip,
    deleteTip,
    getTip,
    getTips,
    getTipsByCategory } from "../controllers/tips.js";

const router = express.Router();

//CREATE Tip
router.post("/",verifyAdmin, createTip);

//UPDATE Tip
router.put("/find/:id",verifyAdmin, updateTip);

//DELETE Tip
router.delete("/find/:id",verifyAdmin, deleteTip);

//GET tip
router.get("/find/:id", getTip);

//GETALL Tips
router.get("/", getTips);

//GETALL Tips by category
router.get("/bycategory", getTipsByCategory);


export default router;
