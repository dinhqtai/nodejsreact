import mongoose from "mongoose";
const Products = new mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    original_price: {
        type: Number,
        require: true
    },
    price: {
        type: Number,
        require: true
    },
    image: {
        type: String,
    },
    desc: {
        type: String,
        require: true
    },
    soLuong: {
        type: Number,
        require: true
    },
})
export default mongoose.model("Product", Products)