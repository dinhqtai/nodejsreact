import mongoose from "mongoose";
const Products = new mongoose.Schema({
  name: {
    type: String,
    require: true,
  },

  short_description: {
    type: String,
    required: false,
  },
  images: [
    {
      base_url: {
        type: String,
        required: true,
      },
      is_gallery: Boolean,
      label: {
        type: String,
        default: null,
      },
      large_url: String,
      medium_url: String,
      position: {
        type: String,
        default: null,
      },
      small_url: String,
      thumbnail_url: String,
    },
  ],
  specifications: [
    {
      name: {
        type: String,
        required: false,
      },
      attributes: [
        {
          code: {
            type: String,
            required: false,
          },
          name: {
            type: String,
            required: false,
          },
          value: {
            type: String,
            required: false,
          },
        },
      ],
    },
  ],

  variants: [
    {
      
        nameColor: {
          type: String,
          required: false,
        },
        codeColor: {
          type: String,
          required: false,
        },
      
      capacity: {
        type: String,
        required: true,
      },
      price: {
        type: Number,
        required: true,
      },
      original_price: {
        type: Number,
        min: 0,
        required: true,
      },
      soLuong: {
        type: Number,
        require: true,
      },
    },
  ],
  desc: {
    type: String,
    require: true,
  },

  category_id: {
    type: mongoose.Types.ObjectId,
    ref: "category",
    require: true,
  },
  timeUpdate: {
    type: String,
    require: true,
  },
});
export default mongoose.model("Product", Products);
