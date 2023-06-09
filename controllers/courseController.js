const courses_details = (req, res) => {
    res.render("course-details")
}

const search = (req, res) => {
    res.render("search")
}


module.exports = {
    courses_details,
    search
}