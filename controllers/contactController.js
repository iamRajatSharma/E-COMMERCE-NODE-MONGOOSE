const Contact = require("../model/Contact")

const saveFormData = async (req, res) => {
    try {
        const data = new Contact({
            name: req.body.name,
            email: req.body.email,
            mobile: req.body.mobile,
            subject: req.body.subject,
            message: req.body.message
        })
        const result = await data.save()
        if (result) {
            res.render("contact", { result, "msg": "Form Saved Successfully.", flag: 0 })
        }
        else {
            res.render("contact", { "msg": "Something Went Wrong", flag: 1 })
        }
    }
    catch (err) {
        res.send(err)
    }
}

module.exports = saveFormData;