const express = require('express');
const router = express.Router();

const profileCardRoutes = require('./profileCard');
const careerRoutes = require('./career');

router.use('/profile-card', profileCardRoutes);
router.use('/career', careerRoutes);

module.exports = router;
