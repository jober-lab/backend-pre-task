const express = require('express');
const router = express.Router();

const asyncWrapper = require('../../context/asyncWrapper');
const {profile_card: ProfileCard} = require('../../models');
const {career: Career} = require('../../models')
const bodyParser = require('body-parser');
router.use(bodyParser.json());

//캐리어 조회
router.get('/:id', asyncWrapper(async (req,res) => {

    let userCareer = await Career.findOne(
        {where: {user_id: req.params.id}}
    );

    res.json({
        userCareer
    })
}))


//캐리어 추가
router.put('/:user_id/add', asyncWrapper(async (req,res) => {
    let newCareer = await Career.create(

    )
}))

module.exports = router;
