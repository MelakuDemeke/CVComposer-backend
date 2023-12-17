import express from "express";
import { verifyAdmin } from "../utils/verifyToken.js";
import { createTip, updateTip, deleteTip, getTip, getTips } from "../controllers/tips.js";

const router = express.Router();

//CREATE Tip
router.post("/",verifyAdmin, createTip);

//UPDATE Tip
router.put("/:id",verifyAdmin, updateTip);

//DELETE Tip
router.delete("/:id",verifyAdmin, deleteTip);

//GET tip
router.get("/:id", getTip);

//GETALL Tips
router.get("/", getTips);


export default router;
