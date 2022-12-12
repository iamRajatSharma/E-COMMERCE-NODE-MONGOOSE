const express = require("express")
const app = express()
const PORT = 12345
// const ejs = require("ejs")

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