const express = require("express")
const router = express.Router()
const homeController = require("../controllers/homeController")
// const userController = require("../controllers/userController")
// const contactController = require("../controllers/contactController")
// const session = require("express-session")

// const auth = require("../middleware/auth")
// router.use(session({ secret: "abcd" }))

router.get("/", homeController.home)

router.get("/register", homeController.register)

router.get("/contact", homeController.contact)

router.get("/login", homeController.login)

router.get("/faq", homeController.faq)

router.get("/about", homeController.about)

router.get("/forgot-password", homeController.forgot_password)


// ##### registeration start #####
// router.get("/register", auth.isLogout, (req, res) => { // display registeration form
//     res.render("register")
// })


// router.post("/register", userController.saveUser) // save registeration form data
// ##### registeration end #####

// user_route.get("/verify/:id", userController.verifyMail)


// ##### login start #####
// router.get("/login", auth.isLogout, (req, res) => {
//     if (req.session.email) {
//         res.redirect("/")
//     }
//     res.render("login")
// })


// router.get("/courses", (req, res) => {
//     res.render("courses")
// })


// router.get("/course-details", (req, res) => {
//     res.render("course-details")

// router.get("/membership", (req, res) => {
//     res.render("membership")
// })

// router.get("/profile", (req, res) => {
//     res.render("profile")
// })

// router.get("/change_password", (req, res) => {
//     res.render("change_password")
// })

// user_route.get("/enrolled_courses", (req, res) => {
//     res.render("enrolled_courses")
// })


// // ##### display search page #####
// user_route.get("/search", (req, res) => {
//     res.render("search")
// })

module.exports = router;