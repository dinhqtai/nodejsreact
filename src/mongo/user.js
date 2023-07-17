import mongoose from "mongoose";
const Users = new mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    money: {
        type: Number,
        require: true
    },
    email: {
        type: String,
        require: true
    },
    password: {
        type: String,
        require: true
    },
    history: [
        {
            _id: {
                type: mongoose.Types.ObjectId,
                ref: "Product",
                require: true
            },
            images: {
                type: String,
                require: true
            },
            name: {
                type: String,
                require: true
            },
            price: {
                type: Number,
                require: true
            },
            soLuong: {
                type: Number,
                require: true
            }
        }
    ],
    cart: [
        {
            _id: {
                type: mongoose.Types.ObjectId,
                ref: "Cart",
                require: true
            }
        }
    ],
})
export default mongoose.model("User", Users);