import quantilyProducts from "../mongo/quantilyProducts"
import { DateTime } from "luxon"
const timeNow = DateTime.now().toLocaleString({ weekday: 'short', month: 'short', day: '2-digit', year: 'numeric', hour: '2-digit', minute: '2-digit' })
export const getAllQuantilyProducts = async (req, res) => {
    try {
        const Cart = await quantilyProducts.find()
        return res.status(200).json(Cart)
    } catch (error) {
        return res.status(400).json({
            message: error
        })
    }
}
export const getQuantilyProducts = async (req, res) => {
    try {
        const Cart = await quantilyProducts.findById(req.params.id)
        return res.status(200).json(Cart)
    } catch (error) {
        return res.status(400).json({
            message: error
        })
    }
}
export const postQuantilyProducts = async (req, res) => {
    try {
        const { idProducts, idColor, idData, quantily } = req.body
        const Cart = await quantilyProducts.create({ idProducts, idColor, idData, quantily, created_at: timeNow })
        return res.status(200).json(Cart)
    } catch (error) {
        return res.status(400).json({
            message: error
        })
    }
}
export const updateQuantilyProducts = async (req, res) => {
    try {
        const Cart = await quantilyProducts.findByIdAndUpdate(req.params.id, req.body)
        return res.status(200).json(Cart)
    } catch (error) {
        return res.status(400).json({
            message: error
        })
    }
}
export const deleteQuantilyProducts = async (req, res) => {
    try {
        const Cart = await quantilyProducts.findByIdAndDelete(req.params.id)
        return res.status(200).json(Cart)
    } catch (error) {
        return res.status(400).json({
            message: error
        })
    }
}