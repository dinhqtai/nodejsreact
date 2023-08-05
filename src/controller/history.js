import history from "../mongo/history"
import { DateTime } from "luxon"
const timeNow = DateTime.now().toLocaleString({ weekday: 'short', month: 'short', day: '2-digit', year: 'numeric', hour: '2-digit', minute: '2-digit' })
export const getAllHistory = async (req, res) => {
    try {
        const Cart = await history.find()
        return res.status(200).json(Cart)
    } catch (error) {
        return res.status(400).json({
            message: error
        })
    }
}
export const getHistory = async (req, res) => {
    try {
        const Cart = await history.findById(req.params.id)
        return res.status(200).json(Cart)
    } catch (error) {
        return res.status(400).json({
            message: error
        })
    }
}
export const postHistory = async (req, res) => {
    try {
        const Cart = await history.create(req.body)
        return res.status(200).json(Cart)
    } catch (error) {
        return res.status(400).json({
            message: error
        })
    }
}
export const updateHistory = async (req, res) => {
    try {
        const Cart = await history.findByIdAndUpdate(req.params.id, req.body)
        return res.status(200).json(Cart)
    } catch (error) {
        return res.status(400).json({
            message: error
        })
    }
}
export const deleteHistory = async (req, res) => {
    try {
        const Cart = await history.findByIdAndDelete(req.params.id)
        return res.status(200).json(Cart)
    } catch (error) {
        return res.status(400).json({
            message: error
        })
    }
}