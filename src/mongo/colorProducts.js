import mongoose from "mongoose";
const Color = new mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    code: {
        type: String,
        require: true
    },
    created_at: {
        type: String,
        require: true
    }
})
export default mongoose.model("ColorProducts", Color)