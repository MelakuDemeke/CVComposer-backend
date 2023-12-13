import express from 'express';
import { updateUser, deleteUser, getUser, getUsers } from '../controllers/users.js';
import { verifyAdmin, verifyToken, verifyUser } from '../utils/verifyToken.js';

const router = express.Router();

router.get("/checkauthentication", verifyToken, (req, res, next)=>{
    res.send("You are authenticated");
});

router.get("/checkuser/:id", verifyUser, (req, res, next)=>{
    res.send("You are logged in and you can delete your account");
});

router.get("/checkadmin/:id", verifyAdmin, (req, res, next)=>{
    res.send("You are logged in as Admin and you can delete all accounts");
});

//UPDATE User
router.put("/:id",verifyUser, updateUser);
//DELETE User
router.delete("/:id",verifyUser, deleteUser);
//GET User
router.get("/:id",verifyUser, getUser);
//GETALL User
router.get("/",verifyAdmin, getUsers);

export default router;