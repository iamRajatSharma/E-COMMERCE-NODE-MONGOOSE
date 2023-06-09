const profile = (req, res) => {
    res.render("profile")
}

const change_password = (req, res) => {
    res.render("change_password")
}

const enrolled_courses = (req, res) => {
    res.render("enrolled_courses")
}

module.exports = {
    profile,
    change_password,
    enrolled_courses
}