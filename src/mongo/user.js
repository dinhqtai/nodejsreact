import mongoose from "mongoose";
const Users = new mongoose.Schema({
    name: {
        type: String,
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
                ref: "History",
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
    timeUpdate: {
        type: String,
        require: true
    }
})
export default mongoose.model("User", Users);