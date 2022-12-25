const express = require("express")
const app = express()
const bodyParser = require("body-parser")
const session = require("express-session")
require("./server/DB")
require('dotenv').config();
const PORT = process.env.PORT
const Contact = require("./model/Contact")
const User = require("./model/Users")
const nodemailer = require("nodemailer")
const { check, validationResult } = require("express-validator")
const Validator = require("fastest-validator");


app.set("view engine", "ejs")
app.use(express.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.static(__dirname + "/public"))

app.set('trust proxy', 1) // trust first proxy
app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true,
    cookie: { secure: true }
}))

app.get("/", (req, res) => {
    // var transporter = nodemailer.createTransport({
    //     service: 'gmail',
    //     port: 587,
    //     auth: {
    //         user: 'sharmarajat687@gmail.com',
    //         pass: '1611340576@rajat#sharma'
    //     }
    // });

    // var mailOptions = {
    //     from: 'sharmarajat687@gmail.com',
    //     to: 'sharma.ruchi1207@yahoo.com',
    //     subject: 'Sending Email using Node.js',
    //     text: 'That was easy!'
    // };

    // transporter.sendMail(mailOptions, function (error, info) {
    //     if (error) {
    //         console.log(error);
    //     } else {
    //         console.log('Email sent: ' + info.response);
    //     }
    // });
    res.render("index")
})

app.get("/contact", (req, res) => {
    res.render("contact")
})

app.post("/contact", async (req, res) => {
    let data = await Contact(req.body);
    data = data.save();
    res.send(req.body)
})

app.get("/login", (req, res) => {
    res.render("login")
})

app.post("/login", async (req, res) => {
    const schema = {
        email: { type: "email", label: "Email Address" }
    };
    const check = v.compile(schema);

    let data = await User.findOne({ email: req.body.email })
    if (data) {
        if (data.password == req.body.password) {
            req.session.email = req.body.email
            res.send({ message: "User Found" })
        }
        else {
            res.send({ message: "Password Not Matched" })
        }
    }
})


app.get("/register", (req, res) => {
    res.render("register")
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