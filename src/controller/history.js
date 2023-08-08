import { types } from "joi"
import history from "../mongo/history"
import user from "../mongo/user"
import { DateTime } from "luxon"
const timeNow = DateTime.now().toLocaleString({ weekday: 'short', month: 'short', day: '2-digit', year: 'numeric', hour: '2-digit', minute: '2-digit' })
export const getAllHistory = async (req, res) => {
    try {
        const getHistory = await history.find().populate("user_id").populate("cart_id")
        return res.status(200).json(getHistory)
    } catch (error) {
        return res.status(400).json({
            message: error
        })
    }
}
export const getHistoryByUser = async (req, res) => {
    try {
        const getHistory = await history.find({ user_id: req.body.user_id })
        return res.status(200).json(getHistory)
    } catch (error) {
        return res.status(400).json({
            message: error
        })
    }
}
export const getHistoryById = async (req, res) => {
    try {
        const getHistory = await history.findById(req.params.id)
        return res.status(200).json(getHistory)
    } catch (error) {
        return res.status(400).json({
            message: error
        })
    }
}
export const postAndUpdateHistoryUser = async (req, res) => {
    try {
        const { user_id, diaChi, cart_id } = req.body
        const PostHistory = await history.create({
            user_id,
            diaChi,
            cart_id,
            status: "Đơn hàng chờ xác nhận",
            created_at: timeNow
        })
        const getUser = await user.findOne({ _id: req.body.user_id })
        const History = [...getUser.history, PostHistory]
        const updateHistory = await user.findByIdAndUpdate({ _id: req.body.user_id }, { history: History })
        return res.status(200).json(PostHistory)
    } catch (error) {
        return res.status(400).json({
            message: error.message
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