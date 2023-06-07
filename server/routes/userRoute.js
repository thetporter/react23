import express from 'express';

const router = express.Router();
import User from '../db/schemas/userSchema.js'
import Post from '../db/schemas/postSchema.js'

router.get('/users/o', async (req, res) => {
    try {
        var user;
        let identified = false;

        if (req.query.id) {
            console.log("User identification by ID");
            try { user = await User.findOne( {"_id": req.query.id} ); 
                  identified = true;
            } catch (error) {
                identified = false;
            }
        }
        
        if (req.query.login) {
            console.log(`User identification by LOGIN ${req.query.login}`);
            try { user = await User.findOne( {"login": req.query.login} );
                  identified = true;
                  console.log(`LOGIN ${user.login} identification complete`);
            } catch (error) {
                identified = false;
                console.log(`Failed to identify ${req.query.login}`)
            }
        }

        if (identified == true) {
            console.log(`Identified ${user.login} successfully`);

            const userPosts = await Post.find({"author": user.login})

            const response = {
                success: true,
                statMsg: 'GET successful',
                returned: [user, userPosts] || {}
            }

            res.status(200).json(response).send();
        } else {
            const response = {
                success: true,
                statMsg: 'GET successful',
                returned: "NoUser"
            }
            res.status(200).json(response).send();
        }
    } catch (error) {

        const response = {
            success: false,
            statMsg: 'GET failed',
            error: error.toString()
        }

        res.status(400).json(response).send();
    }
});

router.get('/users', async (req, res) => {
    try {
        const users = await User.find({});

        const response = {
            success: true,
            statMsg: 'GET successful',
            returned: users || {}
        }

        res.status(200).json(response).send();
    } catch (error) {
        const response = {
            success: false,
            statMsg: 'GET failed',
            error: error.toString()
        }

        res.status(400).json(response).send();
    }
});

router.post('/register', async (req, res) => {
    try {
        let user = new User({

        })
        res.status(200).json(user).send();
    } catch (error) {

        const response = {
            success: false,
            statMsg: 'POST failed',
            error: error.toString()
        }

        res.status(400).json(response).send();
    }
})

router.post('/login', async (req, res) => {
    try {
        const post = await Post.findOne({'_id': req.params.id});

        post.title = "El titulo";
        post.date_up = Date.now();

        await post.save();

        const response = {
            success: true,
            statMsg: 'PUT successful',
            returned: post || {}
        }

        res.status(200).json(response).send();
    } catch (error) {

        const response = {
            success: false,
            statMsg: 'PUT failed',
            error: error.toString()
        }

        res.status(400).json(response).send();
    }
})

export default router;