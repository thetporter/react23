import express from 'express';

const router = express.Router();
import Post from '../db/schemas/postSchema.js'

router.get('/posts', async (req, res) => {
    try {
        const posts = await Post.find({});
        const response = {
            success: true,
            statMsg: 'GET successful',
            returned: posts || [] 
        }
        res.status(200).json({...response, ...posts}).send();
    } catch (error) {
        const response = {
            success: false,
            statMsg: 'GET failed',
            dbad: ''
        }
        res.status(400).json(response).send();
    }
    
});
router.get('/posts/:id', (req, res) => {
    const response = {
        success: true,
        statMsg: 'GET successful'
    }
    res.status(200).json(response).send();
});

router.post('/post/create', (req, res) => {
    const response = {
        success: true,
        statMsg: 'POST successful'
    }
    res.status(200).json(response).send();
})
router.put('/post/:id/update', (req, res) => {
    const response = {
        success: true,
        statMsg: 'PUT successful'
    }
    res.status(200).json(response).send();
})

export default router;