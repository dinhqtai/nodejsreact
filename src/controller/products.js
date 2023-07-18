import { ModelProducts } from "../model/products";
import products from "../mongo/products";
import { DateTime } from "luxon";
const timeNow = DateTime.now().toLocaleString({ weekday: 'short', month: 'short', day: '2-digit', year: 'numeric', hour: '2-digit', minute: '2-digit' })
export const getAll = async (req, res) => {
    try {
        const Product = await products.find()
        return res.status(200).json(Product)
    } catch (error) {
        return res.status(400).json({
            message: error
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
        const { name, price, image, desc, soLuong, category_id } = req.body
        const { error } = ModelProducts.validate(req.body)
        if (error) {
            return res.status(400).json({
                message: error.details[0].message
            })
        }
        const Product = await products.create({
            name, price, image, desc, soLuong, category_id, timeUpdate: timeNow
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
        if (checkSearchName.length === 0) {
            return res.status(400).json({
                message: "Sản phẩm không tồn tại"
            })
        }
        return res.status(200).json({ checkSearchName, now })
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