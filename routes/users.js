import express from 'express';
import { updateUser, deleteUser, getUser, getUsers } from '../controllers/users.js';

const router = express.Router();

//UPDATE User
router.put("/:id", updateUser);
//DELETE User
router.delete("/:id",deleteUser);
//GET User
router.get("/:id", getUser);
//GETALL User
router.get("/", getUsers);

export default router;