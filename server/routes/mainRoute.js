import express from "express";

const router = express.Router();

router.get('/', (req, res) => {
    const response = {
        success: true,
        statMsg: 'GET successful'
    }
    res.status(200).json(response).send();
});
router.post('/', (req, res) => {
    const response = {
        success: true,
        statMsg: 'POST successful'
    }
    res.status(200).json(response).send();
})
//router.put()
//router.delete()

export default router;