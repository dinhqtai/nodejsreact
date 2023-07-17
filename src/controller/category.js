import category from "../mongo/category";
import { DateTime } from "luxon";
const timeNow = DateTime.now().toLocaleString({ weekday: 'short', month: 'short', day: '2-digit', year: 'numeric', hour: '2-digit', minute: '2-digit' })
export const getAll = async (req, res) => {
    try {
        const Category = await category.find()
        return res.status(200).json(Category)
    } catch (error) {
        return res.status(400).json({
            message: error
        })
    }
}
export const getCategory = async (req, res) => {
    try {

        const Category = await category.findById(req.params.id)
        return res.status(200).json(Category)
    } catch (error) {
        return res.status(400).json({
            message: error
        })
    }
}
export const postCategory = async (req, res) => {
    try {
        const { name } = req.body
        const searchCategory = await category.findOne({ name: req.body.name })
        if (searchCategory) {
            return res.status(400).json({
                message: "Category đã tồn tại"
            })
        }
        const Category = await category.create({
            name, timeUpdate: timeNow
        })
        return res.status(200).json({ Category })
    } catch (error) {
        return res.status(400).json({
            message: error
        })
    }
}
export const updateCategory = async (req, res) => {
    try {
        const { name, timeUpdate: timeNow } = req.body
        const Category = await category.findByIdAndUpdate(req.params.id, { name, timeUpdate: timeNow })
        return res.status(200).json({ Category, timeNow })
    } catch (error) {
        return res.status(400).json({
            message: error
        })
    }
}
export const deleteCategory = async (req, res) => {
    try {
        const Category = await category.findByIdAndDelete(req.params.id)
        return res.status(200).json(Category)
    } catch (error) {
        return res.status(400).json({
            message: error
        })
    }
}
export const searchCategory = async (req, res) => {
    try {
        const searchCategory = await category.find({ name: req.body.name })
        if (searchCategory.length === 0) {
            return res.status(400).json({
                message: "Sản phẩm không tồn tại"
            })
        }
        return res.status(200).json(searchCategory)
    } catch (error) {
        return res.status(400).json({
            message: error
        })
    }
}