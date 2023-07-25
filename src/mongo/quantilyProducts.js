import mongoose, { Mongoose } from "mongoose";
const Quantily = new mongoose.Schema({
    idProducts: {
        type: mongoose.Types.ObjectId,
        ref: "Products",
        require: true
    },
    idColor: {
        type: mongoose.Types.ObjectId,
        ref: "ColorProducts",
        require: true
    },
    idData: {
        type: mongoose.Types.ObjectId,
        ref: "DataProducts",
        require: true
    },
    created_at: {
        type: String,
        require: true
    }
})
export default mongoose.model("QuantilyProducts", Quantily)