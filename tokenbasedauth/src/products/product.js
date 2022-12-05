const mongoose  = require('mongoose');

const Schema = mongoose.Schema;

const ProductSchema = new Schema({
    name : {
        type: String,
        require : "Product name is required"
    },
    addedBy :{
        type: Schema.Types.ObjectId,
        ref : "User"
    }
})

const Product = mongoose.model('Product', ProductSchema)

module.exports = Product