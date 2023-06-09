const express = require("express")
const router = express.Router()
const coursesController = require("../controllers/courseController")

router.get("/course-details", coursesController.courses_details)

router.get("/search", coursesController.search)



module.exports = router