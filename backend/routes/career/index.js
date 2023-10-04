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



//캐리어 추가 및 수정
router.post('/modify', asyncWrapper(async (req, res) => {

    let car = await Career.findOne({
        where: {
            id: Number(req.body.id),
            user_id: Number(req.body.user_id)
        },
    }).then(result => {
        if (result) {
            result.update({
                company_name: req.body.company_name,
                job: req.body.job,
                join_date: req.body.join_date,
                quit_date: req.body.quit_date,
            });
        } else {
            Career.create({
                company_name: req.body.company_name,
                user_id : req.body.user_id,
                job: req.body.job,
                join_date: req.body.join_date,
                quit_date: req.body.quit_date,
            })
        }
        res.json({
            ok: true,
            code: 200,
            message: "modified"
        })
    })
}))

module.exports = router;
