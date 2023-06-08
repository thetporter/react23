import express from 'express';

const router = express.Router();
import Post from '../db/schemas/postSchema.js'

router.get('/posts', async (req, res) => {
    const responsemsg = {
        success: false,
        statMsg: 'GET failed',
        returned: []
    }
    try {
        const posts = await Post.find({});
        
        responsemsg.success = true;
        responsemsg.statMsg = 'GET successful';
        responsemsg.returned = posts || [];
        console.log("returning success for GET posts");
        res.status(200).json(responsemsg);
    } catch (error) {
        responsemsg.returned = [error.toString()];
        console.log("returning error:", responsemsg.toString())
        res.status(400).json(responsemsg);
    }
    
});

router.get('/posts/:id', async (req, res) => {
    try {
        const post = await Post.findOne({'_id': req.params.id});

        const responsemsg = {
            success: true,
            statMsg: 'GET successful',
            returned: [post]
        }

        console.log("returning success for GET post:", responsemsg);
        res.status(200).json(responsemsg);
    } catch (error) {
        const responsemsg = {
            success: false,
            statMsg: 'GET failed',
            returned: [error.toString()]
        }

        console.log("returning failure for GET post:", responsemsg.returned[0]);
        res.status(400).json(responsemsg);
    }
});

router.post('/posts/create', async (req, res) => {
    try {
        const post = new Post({
            title: req.body.title,
            min_desc: req.body.min_desc,
            desc: req.body.desc,
            author: req.body.author
        });

        await post.save();

        const responsemsg = {
            success: true,
            statMsg: 'POST successful',
            returned: [post]
        }

        console.log("returning success for POST post");
        res.status(200).json(responsemsg);
    } catch (error) {

        const responsemsg = {
            success: false,
            statMsg: 'POST failed',
            returned: [error.toString()]
        }

        console.log("returning failure for POST post");
        res.status(400).json(responsemsg);
    }
});

router.put('/posts/:id/update', async (req, res) => {
    try {
        console.log(req.body)
        const post = await Post.findOne({'_id': req.params.id});

        post.title = req.body.title;
        post.min_desc = req.body.min_desc;
        post.desc = req.body.desc;
        post.date_up = Date.now();

        await post.save();

        const responsemsg = {
            success: true,
            statMsg: 'PUT successful',
            returned: [post]
        }

        console.log("returning success for PUT post");
        res.status(200).json(responsemsg);
    } catch (error) {

        const responsemsg = {
            success: false,
            statMsg: 'PUT failed',
            returned: [error.toString()]
        }

        console.log("returning failure for PUT posts:", error.toString());
        res.status(400).json(responsemsg);
    }
})

export default router;