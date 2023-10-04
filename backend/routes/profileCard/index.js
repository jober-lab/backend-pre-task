const express = require('express');
const router = express.Router();

const asyncWrapper = require('../../context/asyncWrapper');
const {profile_card: ProfileCard} = require('../../models');
const {career: Career} = require('../../models')
const bodyParser = require('body-parser');
router.use(bodyParser.json());



//프로필 삭제
router.delete("/profile-card/delete", asyncWrapper(async (req, res) => {

    let user = await ProfileCard.findOne({
        where: {
            id: Number(req.body.user_id),
            deleted_at: null
        }
    }).then(result => {
        if (result == null) {
            res.json({
                ok: false,
                code : 400,
                content : "already deleted"
            })
        } else {
            result.destroy();
            return "delete completed";
        }
    })

    res.json(
        {
            ok: true,
            content: user
        }
    );

}))

module.exports = router;
