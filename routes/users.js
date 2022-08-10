import express from 'express';
import { createUser, getAllUsers, getUser, updateUser, deleteUser } from '../controller/user.js';


const router= express.Router();

// create user
router.post('/', createUser);
// get all users
router.get('/', getAllUsers);
//get individual user by Id
router.get('/:userId', getUser);
// Update individual user
router.patch('/:userId', updateUser); //patch or put both are fine
// Delete an individual user
router.delete('/:userId', deleteUser); //patch or put both are fine


export default router;