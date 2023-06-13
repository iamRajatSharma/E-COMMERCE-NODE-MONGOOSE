const db = require("mongoose")
const Category = require("../model/categoryModel")

const Categories = async () => {
    return await Category.find();
}


module.exports = {
    Categories
}