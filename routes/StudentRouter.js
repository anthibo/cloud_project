const express = require('express')
const tourController = require('./../controllers/StudentController')

const router = express.Router();


router
    .route('/')
    .get()

module.exports = router;