const Category = require("../controllers/categoryController")

const courses_details = async (req, res) => {
    res.render("course-details", { categoriesList: await Category.Categories() })
}

const search = async (req, res) => {
    res.render("search", { categoriesList: await Category.Categories() })
}


module.exports = {
    courses_details,
    search
}