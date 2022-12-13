const express = require("express")
const app = express()
const PORT = 12345


app.set("view engine", "ejs")
app.use(express.static(__dirname + "/public"))

app.get("/", (req, res) => {
    res.render("index")
})

app.get("/contact", (req, res) => {
    res.render("contact")
})

app.get("/login", (req, res) => {
    res.render("login")
})

app.post("/login1", (req, res) => {
    res.render(req.body)
})

app.get("/courses", (req, res) => {
    res.render("courses")
})

app.get("/faq", (req, res) => {
    res.render("faq")
})

app.get("/about", (req, res) => {
    res.render("about")
})

app.get("/course-details", (req, res) => {
    res.render("course-details")
})

app.get("/forgot-password", (req, res) => {
    res.render("forgot-password")
})

app.get("/membership", (req, res) => {
    res.render("membership")
})

app.get("/search", (req, res) => {
    res.render("search")
})

// ++++++++++++++++  ADMIN  ++++++++++++++++

app.get("/admin/", (req, res) => {
    res.render("admin/index")
})

app.get("/admin/login", (req, res) => {
    res.render("admin/login")
})

app.get("/admin/register", (req, res) => {
    res.render("admin/register")
})

app.get("/admin/forgot", (req, res) => {
    res.render("admin/forgot")
})

app.get("/admin/table", (req, res) => {
    res.render("admin/table")
})

app.get("/admin/add_category", (req, res) => {
    res.render("admin/add_category")
})

app.get("/admin/category_list", (req, res) => {
    res.render("admin/category_list")
})

app.get("/admin/add_product", (req, res) => {
    res.render("admin/add_product")
})

app.get("/admin/product_list", (req, res) => {
    res.render("admin/product_list")
})


app.get("/admin/order_successfull", (req, res) => {
    res.render("admin/order_success")
})

app.get("/admin/order_failed", (req, res) => {
    res.render("admin/order_failed")
})

app.get("/admin/form", (req, res) => {
    res.render("admin/form")
})

// display error page
app.get("*", (req, res) => {
    res.render("error")
})

// set server port 
app.listen(PORT, (err) => {
    if (!err) {
        console.log(`Server is running on port ${PORT}`)
    }
})