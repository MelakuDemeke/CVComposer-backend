import express from "express";
import { verifyAdmin } from "../utils/verifyToken.js";
import { createTip } from "../controllers/tips.js";

const router = express.Router();

//CREATE JOB
router.post("/",verifyAdmin, createTip);

export default router;
