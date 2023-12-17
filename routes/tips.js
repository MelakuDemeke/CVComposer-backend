import express from "express";
import { verifyAdmin } from "../utils/verifyToken.js";
import { createTip, updateTip } from "../controllers/tips.js";

const router = express.Router();

//CREATE Tip
router.post("/",verifyAdmin, createTip);

//UPDATE Tip
router.put("/:id",verifyAdmin, updateTip);

export default router;
