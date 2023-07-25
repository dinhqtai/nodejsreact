import mongoose from "mongoose";
const Products = new mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    price: {
        type: Number,
        require: true
    },
    images: {
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
    category_id: {
        type: mongoose.Types.ObjectId,
        ref: "category",
        require: true
    },
    timeUpdate: {
        type: String,
        require: true
    }
})
export default mongoose.model("Products", Products)