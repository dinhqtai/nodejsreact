import mongoose from "mongoose";
const discountCode = new mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    price: {
        type: Number,
        require: true
    },
    discount: {
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
export default mongoose.model("discountCodes", discountCode)