// const User = require("../model/userModel")
// const bcrypt = require("bcrypt")
// const nodemailer = require("nodemailer")


const home = (req, res)=>{
    res.render("index")
}

const register = (req, res)=>{
    res.render("register")
}

const contact = (req, res)=>{
    res.render("contact")
}

const login = (req, res)=>{
    res.render("login")
}

const faq = (req, res)=>{
    res.render("faq")
}

const about = (req, res)=>{
    res.render("about")
}

const forgot_password = (req, res)=>{
    res.render("forgot-password")
}


module.exports = {
    home,
    register,
    contact,
    login,
    faq,
    about,
    forgot_password
}

// secure password
const securePassword = async (password) => {
    try {
        const pass = await bcrypt.hash(password, 10)
        return pass
    }
    catch (error) {
        console.log(error.message)
    }
}

// sen(d verify mail
const sendVerifyMail = async (name, email) => {
    try {
        const transporter = nodemailer.createTestAccount({
            host: "smtp.gmail.com",
            port: 587,
            secure: false,
            requireTLS: true,
            auth: {
                user: "",
                pass: ""
            }
        })
        const mailBody = {
            from: '',
            to: email,
            subject: "Account Verification Mail ✔",
            text: `Hii ${name}, Your account created successfully. <a href='http://localhost:12345/verify?id=${email}'>Click</a> for verify your account.`
        }
        await transporter.sendMail(mailBody, (error, data) => {
            if (error) {
                console.log(error.message)
            }
            else {
                console.log("Verify Email has been sended successfully : " + data)
            }
        })
    }
    catch (error) {
        console.log(error.message)
    }
}


const saveUser = async (req, res) => {
    try {
        const spassword = await securePassword(req.body.password)
        const user = new User({
            name: req.body.name,
            email: req.body.email,
            password: spassword
        })
        const result = await user.save()
        if (result) {
            // sendVerifyMail(req.body.name, req.body.email)
            res.render("register", { result, "msg": "Account Created Successfully. Please Verify your email.", flag: 0 })
        }
        else {
            res.render("register", { "msg": "Account Not Created", flag: 0 })
        }
    }
    catch (err) {
        res.send(err)
    }
}

const verifyMail = async (req, res) => {
    try {
        console.log(req.query.id)
        const data = await User.updateOne({ email: req.query.id }, { $set: { is_verified: 1 } })
        console.log(data)
    }
    catch (error) {
        console.log(error.message)
    }
}

const doLogin = async (req, res) => {
    try {
        const email = req.body.email;
        const password = req.body.password


        const checkEmail = await User.findOne({ email: email })
        if (checkEmail) {
            const comparePassword = await bcrypt.compare(password, checkEmail.password)
            if (comparePassword) {
                if (checkEmail.is_verified == 1) {
                    req.session.email = email
                    res.locals.session = email
                    res.redirect("/")
                }
                else {
                    res.render("login", { checkEmail, "msg": "Please verify email address", flag: 1 })
                }
            }
            else {
                res.render("login", { "msg": "Email/Password Not Matched.", flag: 1 })
            }
        }
        else {
            res.render("login", { "msg": "Email id not exists with our record.", flag: 1 })
        }
    }
    catch (error) {
        console.log(error.message)
    }
}


