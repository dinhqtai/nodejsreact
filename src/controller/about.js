import abouts from "../mongo/about";
import { DateTime } from "luxon";
const timeNow = DateTime.now().toLocaleString({ weekday: 'short', month: 'short', day: '2-digit', year: 'numeric', hour: '2-digit', minute: '2-digit' })
export const getAll = async (req, res) => {
    try {
        const About = await abouts.find()
        return res.status(200).json(About)
    } catch (error) {
        return res.status(400).json({
            message: error
        })
    }
}
export const getAbouts = async (req, res) => {
    try {
        const About = await abouts.findById(req.params.id)
        return res.status(200).json(About)
    } catch (error) {
        return res.status(400).json({
            message: error
        })
    }
}
export const postAbouts = async (req, res) => {
    try {
        const { name, title, image, desc } = req.body
        const About = await abouts.create({
            name, title, image, desc, timeUpdate: timeNow
        })
        return res.status(200).json({ About })
    } catch (error) {
        return res.status(400).json({
            message: error
        })
    }
}
export const updateAbouts = async (req, res) => {
    try {
        const About = await abouts.findByIdAndUpdate(req.params.id, req.body)
        return res.status(200).json(About)
    } catch (error) {
        return res.status(400).json({
            message: error
        })
    }
}
export const deleteAbouts = async (req, res) => {
    try {
        const About = await abouts.findByIdAndDelete(req.params.id)
        return res.status(200).json(About)
    } catch (error) {
        return res.status(400).json({
            message: error
        })
    }
}
export const searchAboutsName = async (req, res) => {
    try {
        const checkSearchName = await abouts.find({ name: { $regex: req.body.name } })
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