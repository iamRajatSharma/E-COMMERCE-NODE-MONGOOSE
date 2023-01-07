const express = require("express")
const router = express.Router()
const session = require("express-session")
const bodyParser = require("body-parser")
const adminController = require("../controllers/admin/adminController")

router.use(bodyParser.urlencoded({ extended: false }))
router.use(bodyParser.json())

router.get("/home", (req, res) => {
    res.render("admin/index")
})

router.get("/index", (req, res) => {
    res.render("/admin/login")
})

router.post("/index", adminController.doLogin)

router.get("/register", (req, res) => {
    res.render("admin/register")
})

router.get("/forgot", (req, res) => {
    res.render("admin/forgot")
})

router.get("/table", (req, res) => {
    res.render("admin/table")
})

router.get("/add_category", (req, res) => {
    res.render("admin/add_category")
})

router.get("/category_list", (req, res) => {
    res.render("admin/category_list")
})

router.get("/add_product", (req, res) => {
    res.render("admin/add_product")
})

router.get("/product_list", (req, res) => {
    res.render("admin/product_list")
})

router.get("/order_successfull", (req, res) => {
    res.render("admin/order_success")
})

router.get("/order_failed", (req, res) => {
    res.render("admin/order_failed")
})

router.get("/form", (req, res) => {
    res.render("admin/form")
})

module.exports = router;