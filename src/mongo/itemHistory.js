import mongoose from "mongoose";
const statusCart = ["Đơn hàng chờ xác nhận", "Đang được chuẩn bị", "Đang giao", "Đang giao"]
const itemHistory = new mongoose.Schema({
    idUser: {
        type: mongoose.Types.ObjectId,
        ref: "User",
        require: true
    },
    diaChi: {
        type: String,
        require: true
    },
    History: [
        {
            _id: {
                type: mongoose.Types.ObjectId,
                ref: "Cart",
                require: true
            },
        }
    ],
    status: {
        type: String,
        enum: statusCart,
        require: true

    },
    created_at: {
        type: String,
        require: true
    }
})
export default mongoose.model("itemHistory", itemHistory);