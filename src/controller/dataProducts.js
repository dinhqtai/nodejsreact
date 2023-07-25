import dataProducts from "../mongo/dataProducts"
export const getAllDataProducts = async (req, res) => {
    try {
        const Cart = await dataProducts.find()
        return res.status(200).json(Cart)
    } catch (error) {
        return res.status(400).json({
            message: error
        })
    }
}
export const getDataProducts = async (req, res) => {
    try {
        const Cart = await dataProducts.findById(req.params.id)
        return res.status(200).json(Cart)
    } catch (error) {
        return res.status(400).json({
            message: error
        })
    }
}
export const postDataProducts = async (req, res) => {
    try {
        const Cart = await dataProducts.create(req.body)
        return res.status(200).json(Cart)
    } catch (error) {
        return res.status(400).json({
            message: error
        })
    }
}
export const updateDataProducts = async (req, res) => {
    try {
        const Cart = await dataProducts.findByIdAndUpdate(req.params.id, req.body)
        return res.status(200).json(Cart)
    } catch (error) {
        return res.status(400).json({
            message: error
        })
    }
}
export const deleteDataProducts = async (req, res) => {
    try {
        const Cart = await dataProducts.findByIdAndDelete(req.params.id)
        return res.status(200).json(Cart)
    } catch (error) {
        return res.status(400).json({
            message: error
        })
    }
}