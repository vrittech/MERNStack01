const mongoose = require('mongoose');

const CategorySchema = new mongoose.Schema({
    name : {
        type : String,
        required : "Name is required"
    },

},{
    timestamps : true
})

const CategoryModel = mongoose.model('category',CategorySchema);

module.exports = CategoryModel