import mongoose from "mongoose";
const Data = new mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    created_at: {
        type: String,
        require: true
    }
})
export default mongoose.model("DataProducts", Data)