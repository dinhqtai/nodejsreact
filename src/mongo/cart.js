import mongoose from "mongoose";
const Cart = new mongoose.Schema({
    idUser: {
        type: mongoose.Types.ObjectId,
        ref: "User",
        require: true
    },
    Cart: [
        {
            _id: {
                type: mongoose.Types.ObjectId,
                ref: "Products",
                require: true
            },
            quantity: {
                type: Number,
                require: true
            },
        }
    ],
    created_at: {
        type: String,
        require: true
    }
})
export default mongoose.model("Cart", Cart);