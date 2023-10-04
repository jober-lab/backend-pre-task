const express = require('express');
const router = express.Router();

const asyncWrapper = require('../../context/asyncWrapper');
const {profile_card: ProfileCard} = require('../../models');
const {career: Career} = require('../../models')
const bodyParser = require('body-parser');
router.use(bodyParser.json());

//캐리어 조회
router.get('/:id', asyncWrapper(async (req, res) => {

    let userCareer = await Career.findAll(
        {where: {user_id: req.params.id}}
    );

    res.json({
        userCareer
    })
}))




module.exports = router;
