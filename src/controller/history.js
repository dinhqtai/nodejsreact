// import History from "../mongo/History"
import { DateTime } from "luxon"
const timeNow = DateTime.now().toLocaleString({ weekday: 'short', month: 'short', day: '2-digit', year: 'numeric', hour: '2-digit', minute: '2-digit' })
export const getAllHistory = async (req, res) => {
    try {
        const getHistory = await History.find()
        return res.status(200).json(getHistory)
    } catch (error) {
        return res.status(400).json({
            message: error
        })
    }
}
export const getHistory = async (req, res) => {
    try {
        const getHistory = await History.findById(req.params.id)
        return res.status(200).json(getHistory)
    } catch (error) {
        return res.status(400).json({
            message: error
        })
    }
}
export const postHistory = async (req, res) => {
    try {
        // const CheckHistory = await History.findOne({ idUser: req.body.idUser })
        // if (!CheckHistory) {
        const PostHistory = await History.create({
            idUser,
            diaChi,
            idCart,
            status: "Đơn hàng chờ xác nhận",
            created_at: timeNow
        })
        // }
        // const updateHistory = [...CheckHistory.History, ...req.body.History]
        // const Update = await History.findByIdAndUpdate(CheckHistory._id, { History: updateHistory })
        // return res.status(200).json(Update)
    } catch (error) {
        return res.status(400).json({
            message: error.message
        })
    }
}
export const updateHistory = async (req, res) => {
    try {
        const Cart = await History.findByIdAndUpdate(req.params.id, req.body)
        return res.status(200).json(Cart)
    } catch (error) {
        return res.status(400).json({
            message: error
        })
    }
}
export const deleteHistory = async (req, res) => {
    try {
        const Cart = await History.findByIdAndDelete(req.params.id)
        return res.status(200).json(Cart)
    } catch (error) {
        return res.status(400).json({
            message: error
        })
    }
}