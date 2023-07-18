import { AddDiscount } from "../model/discountCode"
import discountCode from "../mongo/discountCode"
import { DateTime } from "luxon"
const timeNow = DateTime.now().toLocaleString({ weekday: 'short', month: 'short', day: '2-digit', year: 'numeric', hour: '2-digit', minute: '2-digit' })
export const getAllDiscountCode = async (req, res) => {
    try {
        const DiscountCode = await discountCode.find()
        return res.status(200).json({ DiscountCode })
    } catch (error) {
        return res.status(400).json({
            message: error
        })
    }
}
export const getdiscountCode = async (req, res) => {
    try {
        const DiscountCode = await discountCode.findById(req.params.id)
        return res.status(200).json({ DiscountCode })
    } catch (error) {
        return res.status(400).json({
            message: error
        })
    }
}
export const postdiscountCode = async (req, res) => {
    try {
        const { error } = AddDiscount.validate(req.body)
        if (error) {
            return res.status(400).json({
                message: error.details[0].message
            })
        }
        const checkName = await discountCode.findOne({ name: req.body.name })
        if (checkName) {
            return res.status(400).json({
                message: "Mã ưu đãi này đã tồn tại"
            })
        }
        const { name, price, discount, soLuong } = req.body
        const DiscountCode = await discountCode.create({
            name,
            price,
            discount,
            soLuong,
            timeUpdate: timeNow
        })
        return res.status(200).json({ DiscountCode, message: "Thêm thành công" })
    } catch (error) {
        return res.status(400).json({
            message: error
        })
    }
}
export const updatediscountCode = async (req, res) => {
    try {
        const { error } = AddDiscount.validate(req.body)
        if (error) {
            return res.status(400).json({
                message: error.details[0].message
            })
        }
        const DiscountCode = await discountCode.findByIdAndUpdate(req.params.id, req.body)
        return res.status(200).json({ DiscountCode })
    } catch (error) {
        return res.status(400).json({
            message: error
        })
    }
}
export const deletediscountCode = async (req, res) => {
    try {
        const DiscountCode = await discountCode.findByIdAndDelete(req.params.id)
        return res.status(200).json({ DiscountCode })
    } catch (error) {
        return res.status(400).json({
            message: error
        })
    }
}
export const checkDiscount = async (req, res) => {
    try {
        const checkDiscountFind = await discountCode.findOne({ discount: req.body.discount })
        if (!checkDiscountFind) {
            return res.status(400).json({
                message: "Không tồn tại mã giảm giá này"
            })
        }
        return res.status(200).json({ checkDiscountFind })
    } catch (error) {
        return res.status(400).json({
            message: error
        })
    }
}
export const searchNameDiscount = async (req, res) => {
    try {
        const checkDiscountFind = await discountCode.find({ name: { $regex: req.body.name } })
        return res.status(200).json({ checkDiscountFind })
    } catch (error) {
        return res.status(400).json({
            message: error
        })
    }
}