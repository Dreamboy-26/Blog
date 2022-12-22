import express from 'express'

import {
  createPost,
  updatePost,
  deletePost,
  getPost,
  getAllPosts,
  demo
} from '../controller/postController.js'

import {
  loginUser,
  singupUser,
} from '../controller/userController.js'

const router = express.Router()

router.get("/" ,demo)

router.post('/login', loginUser)
router.post('/signup', singupUser)

router.post('/create', createPost)
router.put('/update/:id', updatePost)
router.delete('/delete/:id', deletePost)

router.get('/post/:id', getPost)
router.get('/posts', getAllPosts)

export default router
