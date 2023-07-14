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
    discountCode: {
        type: String,
        require: true
    },
    soLuong: {
        type: Number,
        require: true
    }
})
export default mongoose.model("discountCodes", discountCode)