const express = require("express")
const routes = express.Router()
const userController = require("../controllers/userController")
// const userController = require("../controllers/userController")
// const contactController = require("../controllers/contactController")
// const session = require("express-session")

// const auth = require("../middleware/auth")
// user_route.use(session({ secret: "abcd" }))



// // ##### registeration start #####
// user_route.get("/register", auth.isLogout, (req, res) => { // display registeration form
//     res.render("register")
// })

// user_route.post("/register", userController.saveUser) // save registeration form data
// // ##### registeration end #####



// // user_route.get("/verify/:id", userController.verifyMail)

// user_route.get("/", (req, res) => {
//     res.render("index")
// })



// // ##### contact start #####
// user_route.get("/contact", (req, res) => { // display contact form
//     res.render("contact")
// })

// user_route.post("/contact", contactController) // save contact form data
// // ##### contact end #####



// // ##### login start #####
// user_route.get("/login", auth.isLogout, (req, res) => {
//     if (req.session.email) {
//         res.redirect("/")
//     }
//     res.render("login")
// })

// user_route.post("/login", userController.doLogin)
// // ##### login end #####




// user_route.get("/courses", (req, res) => {
//     res.render("courses")
// })

// // ##### display FAQ's page #####
// user_route.get("/faq", (req, res) => {
//     res.render("faq")
// })



// // ##### display about page #####
// user_route.get("/about", (req, res) => {
//     res.render("about")
// })

// user_route.get("/course-details", (req, res) => {
//     res.render("course-details")
// })

// user_route.get("/forgot-password", (req, res) => {
//     res.render("forgot-password")
// })

// user_route.get("/membership", (req, res) => {
//     res.render("membership")
// })

routes.get("/profile", userController.profile)

routes.get("/change_password", userController.change_password)

routes.get("/enrolled_courses", userController.enrolled_courses)


// // ##### display search page #####
// user_route.get("/search", (req, res) => {
//     res.render("search")
// })

module.exports = routes;