// import express
const express = require('express')
const {body} = require('express-validator')

const router = express.Router();

const blogController = require('../controllers/blog');

router.post('/post', [
    body('title').isLength({min: 5}).withMessage('Input Title Minimum 5 karakter'),
    body('body').isLength({min: 5}).withMessage('Input Body Minimum 5 karakter')], blogController.createBlogPost);

// Get API with query params
router.get('/posts', blogController.getAllBlogPost);
router.get('/post/:postId', blogController.getBlogPostById);
// Update Database with put with params Id
router.put('/post/:postId', [
    body('title').isLength({min: 5}).withMessage('Input Title Minimum 5 karakter'),
    body('body').isLength({min: 5}).withMessage('Input Body Minimum 5 karakter')], blogController.updateBlogPost);
// Delete Database
router.delete('/post/:postId', blogController.deleteBlogPost);

module.exports = router;