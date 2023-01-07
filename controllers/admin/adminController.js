const Admin = require("../../model/Admin/adminModel")

const doLogin = async (req, res) => {
    const { email, password } = req.body
    const checkData = await Admin.findOne({ email: email })
    if (checkData) {
        console.log(checkData)
        if (checkData.password == password) {
            // res.render("/index")
        }
        else {
            res.render("/index", { "msg": "Email ID Not Found" })
        }
    }
    else {
        res.render("/index", { "msg": "Email ID Not Found" })
    }
}


module.exports = {
    doLogin
}