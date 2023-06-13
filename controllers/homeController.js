const db = require("mongoose")
const User = require("../model/userModel")
const Category = require("./categoryController")
const Contact = require("../model/contactModel")

const home = async (req, res) => {
    res.render("index", { categoriesList: await Category.Categories() })
}

const register = (req, res) => {
    res.render("register")
}

// do login 
const doRegister = async (req, res) => {
    const { name, email, password } = req.body
    if (!name || !email || !password) {
        return res.render("register", { msg: "All Fields Required", flag: 1 })
    }

    const checkUserExist = await User.find({ email: email }).count()
    if (checkUserExist > 0) {
        return res.render("register", { msg: "User is already exists with this email ID", flag: 1 })
    }

    const user = await new User({ name, email, password })
    if (user.save()) {
        return res.render("register", { msg: "Account Created Successfully. Please verify mail that is send to your email address.", flag: 0 })
    }
    else {
        return res.render("register", { msg: "Something Wrong. Please try after sometime.", flag: 1 })
    }

}

const contact = async (req, res) => {
    res.render("contact", { categoriesList: await Category.Categories() })
}

const saveFormData = async (req, res) => {
    // try {
    const name = req.body.name
    const email = req.body.email
    const mobile = req.body.mobile
    const subject = req.body.subject
    const message = req.body.message
    if (name && email && mobile && subject && message) {
        const data = new Contact({
            name, email, mobile, subject, message
        })
        const result = await data.save()
        if (result) {
            return res.render("contact", { result, "msg": "Form Saved Successfully.", flag: 0, categoriesList: await Category.Categories() })
        }
        else {
            return res.render("contact", { "msg": "Something Went Wrong", flag: 1, categoriesList: await Category.Categories() })
        }
    } else {
        return res.render("contact", { "msg": "All Fields Required", flag: 1, categoriesList: await Category.Categories() })
    }
    // }
    // catch (err) {
    //     return res.render("contact", { "msg": err, flag: 1, categoriesList: await Category.Categories() })
    // }
}

const login = (req, res) => {
    res.render("login")
}

// do login
const doLogin = async (req, res) => {
    const { email, password } = req.body
    if (!email || !password) {
        res.render("login", { msg: "All Fields Required", flag: 1 })
    }

    const checkUserExist = await User.find({ email: email })
    if (checkUserExist.length == 0) {
        res.render("login", { msg: "Email ID is not exists with our records", flag: 1 })
    }

    if (checkUserExist.is_verified == 0) {
        res.render("login", { msg: "Please verify your email", flag: 1 })
    }

    if (password == checkUserExist[0].password) {
        res.render("login", { msg: "Login Sucessfully", flag: 0 })
        // make a login and set session
    }
    else {
        res.render("login", { msg: "Incorrect password", flag: 1 })
    }


}

const faq = async (req, res) => {
    res.render("faq", { categoriesList: await Category.Categories() })
}

const about = async (req, res) => {
    res.render("about", { categoriesList: await Category.Categories() })
}

const forgot_password = (req, res) => {
    res.render("forgot-password")
}

const doForgotPassword = async (req, res) => {
    const { email } = req.body
    if (!email) {
        res.render("forgot-password", { msg: "All Fields Required", flag: 1 })
    }

    const checkUserExist = await User.find({ email: email })
    if (checkUserExist.length == 0) {
        res.render("forgot-password", { msg: "Email ID is not exists with our records", flag: 1 })
    }

    res.render("forgot-password")

}


module.exports = {
    home,
    register,
    contact,
    login,
    faq,
    about,
    forgot_password,
    doRegister,
    doLogin,
    doForgotPassword,
    saveFormData
}

// secure password
// const securePassword = async (password) => {
//     try {
//         const pass = await bcrypt.hash(password, 10)
//         return pass
//     }
//     catch (error) {
//         console.log(error.message)
//     }
// }

// // sen(d verify mail
// const sendVerifyMail = async (name, email) => {
//     try {
//         const transporter = nodemailer.createTestAccount({
//             host: "smtp.gmail.com",
//             port: 587,
//             secure: false,
//             requireTLS: true,
//             auth: {
//                 user: "",
//                 pass: ""
//             }
//         })
//         const mailBody = {
//             from: '',
//             to: email,
//             subject: "Account Verification Mail ✔",
//             text: `Hii ${name}, Your account created successfully. <a href='http://localhost:12345/verify?id=${email}'>Click</a> for verify your account.`
//         }
//         await transporter.sendMail(mailBody, (error, data) => {
//             if (error) {
//                 console.log(error.message)
//             }
//             else {
//                 console.log("Verify Email has been sended successfully : " + data)
//             }
//         })
//     }
//     catch (error) {
//         console.log(error.message)
//     }
// }


// const saveUser = async (req, res) => {
//     try {
//         const spassword = await securePassword(req.body.password)
//         const user = new User({
//             name: req.body.name,
//             email: req.body.email,
//             password: spassword
//         })
//         const result = await user.save()
//         if (result) {
//             // sendVerifyMail(req.body.name, req.body.email)
//             res.render("register", { result, "msg": "Account Created Successfully. Please Verify your email.", flag: 0 })
//         }
//         else {
//             res.render("register", { "msg": "Account Not Created", flag: 0 })
//         }
//     }
//     catch (err) {
//         res.send(err)
//     }
// }

// const verifyMail = async (req, res) => {
//     try {
//         console.log(req.query.id)
//         const data = await User.updateOne({ email: req.query.id }, { $set: { is_verified: 1 } })
//         console.log(data)
//     }
//     catch (error) {
//         console.log(error.message)
//     }
// }

// const doLogin = async (req, res) => {
//     try {
//         const email = req.body.email;
//         const password = req.body.password


//         const checkEmail = await User.findOne({ email: email })
//         if (checkEmail) {
//             const comparePassword = await bcrypt.compare(password, checkEmail.password)
//             if (comparePassword) {
//                 if (checkEmail.is_verified == 1) {
//                     req.session.email = email
//                     res.locals.session = email
//                     res.redirect("/")
//                 }
//                 else {
//                     res.render("login", { checkEmail, "msg": "Please verify email address", flag: 1 })
//                 }
//             }
//             else {
//                 res.render("login", { "msg": "Email/Password Not Matched.", flag: 1 })
//             }
//         }
//         else {
//             res.render("login", { "msg": "Email id not exists with our record.", flag: 1 })
//         }
//     }
//     catch (error) {
//         console.log(error.message)
//     }
// }


