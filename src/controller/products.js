import { ModelProducts } from "../shema/products";
import products from "../mongo/products";
import category from "../mongo/category";
import { DateTime } from "luxon";
const timeNow = DateTime.now().toLocaleString({ weekday: 'short', month: 'short', day: '2-digit', year: 'numeric', hour: '2-digit', minute: '2-digit' })
export const getAll = async (req, res) => {
  try {
    const Product = await products.find().populate("category_id")
    // const nameCategory = await category.find({ category_id: })
    return res.status(200).json(Product)
  } catch (error) {
    return res.status(400).json({
      message: error.message
    })
  }
}
export const getProducts = async (req, res) => {
  try {
    const Product = await products.findById(req.params.id)
    return res.status(200).json(Product)
  } catch (error) {
    return res.status(400).json({
      message: error
    })
  }
}
export const postProducts = async (req, res) => {
  try {
    const { name, price, images, desc, soLuong, category_id } = req.body
    const { error } = ModelProducts.validate(req.body)
    if (error) {
      return res.status(400).json({
        message: error.details[0].message
      })
    }
    const Product = await products.create({
      name, price, images, desc, soLuong, category_id, timeUpdate: timeNow
    })
    return res.status(200).json({ Product })
  } catch (error) {
    return res.status(400).json({
      message: error
    })
  }
}
export const update = async (req, res) => {
  try {
    const Product = await products.findByIdAndUpdate(req.params.id, req.body)
    return res.status(200).json(Product)
  } catch (error) {
    return res.status(400).json({
      message: error
    })
  }
}
export const deleteProduct = async (req, res) => {
  try {
    const Product = await products.findByIdAndDelete(req.params.id)
    return res.status(200).json(Product)
  } catch (error) {
    return res.status(400).json({
      message: error
    })
  }
}
export const searchProductsName = async (req, res) => {

  try {
    const checkSearchName = await products.find({ name: { $regex: req.body.name } })
    // if (checkSearchName.  === 0) {
    //     return res.status(400).json({
    //         message: "Sản phẩm không tồn tại"
    //     })
    // }
    return res.status(200).json({ checkSearchName })
  } catch (error) {
    return res.status(400).json({
      message: error
    })
  }
}
export const searchProductsNameOne = async (req, res) => {

  try {
    const checkSearchNameOne = await products.find({ name: req.body.name })
    // if (checkSearchName.  === 0) {
    //     return res.status(400).json({
    //         message: "Sản phẩm không tồn tại"
    //     })
    // }
    return res.status(200).json({ checkSearchNameOne })
  } catch (error) {
    return res.status(400).json({
      message: error
    })
  }
}
export const searchProductsPrice = async (req, res) => {
  try {
    const checkSearchPrice = await products.find({
      price: {
        $gte: req.body.priceMin,
        $lte: req.body.priceMax
      }
    })
    if (checkSearchPrice.length === 0) {
      return res.status(400).json({
        message: "Sản phẩm không tồn tại"
      })
    }
    return res.status(200).json(checkSearchPrice)
  } catch (error) {
    return res.status(400).json({
      message: error
    })
  }
}
export const searchProductsPriceMin = async (req, res) => {
  try {
    const checkSearchPrice = await products.find({
      price: {
        $gte: req.body.priceMin
      }
    })
    if (checkSearchPrice.length === 0) {
      return res.status(400).json({
        message: "Sản phẩm không tồn tại"
      })
    }
    return res.status(200).json(checkSearchPrice)
  } catch (error) {
    return res.status(400).json({
      message: error
    })
  }
}
export const searchProductsPriceMax = async (req, res) => {
  try {
    const checkSearchPrice = await products.find({
      price: {
        $lte: req.body.priceMax
      }
    })
    if (checkSearchPrice.length === 0) {
      return res.status(400).json({
        message: "Sản phẩm không tồn tại"
      })
    }
    return res.status(200).json(checkSearchPrice)
  } catch (error) {
    return res.status(400).json({
      message: error
    })
  }
}
export const searchProducts = async (req, res) => {


  try {
    const { priceMax, priceMin, name } = req.body;

    let searchQuery = {};
    // if (name && !isNaN(name)) {
    //     searchQuery.price = { ...searchQuery.price, $regex: String(name) };
    // }
    if (priceMin && !isNaN(priceMin)) {
      searchQuery.price = { ...searchQuery.price, $gte: Number(priceMin) };
    }
    if (priceMax && !isNaN(priceMax)) {
      searchQuery.price = { ...searchQuery.price, $lte: Number(priceMax) };
    }

    const checkSearch = await products.find(searchQuery);

    if (checkSearch.length === 0) {
      return res.status(400).json({
        message: "Sản phẩm không tồn tại"
      });
    }

    return res.status(200).json(checkSearch);
  } catch (error) {
    return res.status(400).json({
      message: error.message
    });
  }
};
export const searchProductsPriceSort = async (req, res) => {
  try {
    const checkSearchPrice = await products.find().sort({ price: -1 })
    return res.status(200).json(checkSearchPrice)
  } catch (error) {
    return res.status(400).json({
      message: error
    })
  }
}
export const searchProductsCategory = async (req, res) => {
  try {
    const checkSearch = await products.find({ category_id: req.body.category_id })
    if (checkSearch.length === 0) {
      return res.status(400).json({
        message: "Sản phẩm không tồn tại"
      })
    }
    return res.status(200).json(checkSearch)
  } catch (error) {
    return res.status(400).json({
      message: error
    })
  }
}
export const searchProductsCategoryDetail = async (req, res) => {
  try {
    const checkSearch = await products.find({ category_id: req.body.category_id }).limit(8)
    if (checkSearch.length === 0) {
      return res.status(400).json({
        message: "Sản phẩm không tồn tại"
      })
    }
    return res.status(200).json(checkSearch)
  } catch (error) {
    return res.status(400).json({
      message: error
    })
  }
}
