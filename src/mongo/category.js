import mongoose from "mongoose";
const category = new mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    image: {
        type: String,
        require: true
    },
    timeUpdate: {
        type: String,
        require: true
    }
})
export default mongoose.model("categoryProducts", category)