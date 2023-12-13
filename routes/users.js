import express from 'express';
import { updateUser, deleteUser, getUser, getUsers } from '../controllers/users.js';
import { verifyToken } from '../utils/verifyToken.js';

const router = express.Router();

router.get("/checkauthentication", verifyToken, (req, res, next)=>{
    res.send("You are authenticated");
});

//UPDATE User
router.put("/:id", updateUser);
//DELETE User
router.delete("/:id",deleteUser);
//GET User
router.get("/:id", getUser);
//GETALL User
router.get("/", getUsers);

export default router;