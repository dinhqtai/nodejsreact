import mongoose from "mongoose";
const Cart = new mongoose.Schema({
    Cart: [
        {
            _id: {
                type: mongoose.Types.ObjectId,
                ref: "Products",
                require: true
            },
            price: {
                type: Number,
                require: true
            },
            soLuong: {
                type: Number,
                require: true
            },
        }
    ],
    idUser: {
        type: mongoose.Types.ObjectId,
        ref: "user",
        require: true
    }
})
export default mongoose.model("Cart", Cart);