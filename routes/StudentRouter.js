const express = require('express')
const studentController = require('./../controllers/StudentController')

const router = express.Router();


router
    .route('/')
    .get(studentController.getAllStudents)

module.exports = router;