const db = require("mongoose")
const Category = require("../controllers/categoryController")

const profile = async (req, res) => {
    res.render("profile", { categoriesList: await Category.Categories(), url: req.route.path })
}

const change_password = async (req, res) => {
    res.render("change_password", { categoriesList: await Category.Categories(), url: req.route.path })
}

const enrolled_courses = async (req, res) => {
    res.render("enrolled_courses", { categoriesList: await Category.Categories(), url: req.route.path })
}

module.exports = {
    profile,
    change_password,
    enrolled_courses
}