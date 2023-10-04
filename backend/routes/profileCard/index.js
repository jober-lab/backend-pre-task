const express = require('express');
const router = express.Router();

const asyncWrapper = require('../../context/asyncWrapper');
const {profile_card: ProfileCard} = require('../../models');
const {career: Career} = require('../../models')
const bodyParser = require('body-parser');
router.use(bodyParser.json());


//기본 조회
router.get('/', asyncWrapper(async (req, res) => {

    let pageNum = req.query.pageNum; // 요청 페이지 넘버
    let offset = 0;
    let orderBy = req.query.orderBy;
    let orderByStandard = req.query.orderByStandard;

    if (pageNum > 1) {
        offset = 10 * (pageNum - 1);
    }

    const list = await ProfileCard.findAll({
        offset: offset,
        limit: 10,
        order: [[orderByStandard, orderBy]]
    })
        .then(async result => {
            return res.status(200).json({
                ok: true,
                message: ("success"),
                content: result
            })
        })
        .catch(err => {
            return res.status(400).json({
                ok : false,
                message:("failed"),
                content: err
            })
        });

}));

//상세페이지 조회 | 유저 정보 + 캐리어 정보
router.get('/:uid', asyncWrapper(async (req, res) => {

    const user_detail = await ProfileCard.findOne({
        id: Number(req.params.uid),
        include: [{
            model: Career
        }]
    });

    res.send(user_detail);

}));



//프로필 삭제
router.delete("/delete", asyncWrapper(async (req, res) => {

    let user = await ProfileCard.findOne({
        where: {
            id: Number(req.body.user_id),
            deleted_at: null
        }
    }).then(result => {
        if (result == null) {
            res.json({
                ok: false,
                code: 400,
                content: "already deleted"
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
