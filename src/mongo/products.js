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
    timeUpdate: {
        type: String,
        require: true
    }
})
export default mongoose.model("Product", Products)