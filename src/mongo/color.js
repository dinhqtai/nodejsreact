import mongoose from "mongoose";
const color = new mongoose.Schema({
  color: [
    {
      name: {
        type: String,
        required: true,
      },
      color_code: {
        type: String,
        required: true,
      },
    },
  ],
});
export default mongoose.model("Color", color);
