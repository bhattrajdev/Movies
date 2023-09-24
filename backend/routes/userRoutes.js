import express from 'express'
import { getUsers,getUser,deleteUser } from '../controllers/userController.js'

const router = express.Router()

// Routes realted to users
router.route("/").get(getUsers);

// Routes realted to user
router.route('/:id').get(getUser).delete(deleteUser)



export default router