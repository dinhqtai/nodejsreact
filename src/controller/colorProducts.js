import colorProducts from "../mongo/colorProducts"
export const getAllColorProducts = async (req, res) => {
    try {
        const Cart = await colorProducts.find()
        return res.status(200).json(Cart)
    } catch (error) {
        return res.status(400).json({
            message: error
        })
    }
}
export const getColorProducts = async (req, res) => {
    try {
        const Cart = await colorProducts.findById(req.params.id)
        return res.status(200).json(Cart)
    } catch (error) {
        return res.status(400).json({
            message: error
        })
    }
}
export const postColorProducts = async (req, res) => {
    try {
        const Cart = await colorProducts.create(req.body)
        return res.status(200).json(Cart)
    } catch (error) {
        return res.status(400).json({
            message: error
        })
    }
}
export const updateColorProducts = async (req, res) => {
    try {
        const Cart = await colorProducts.findByIdAndUpdate(req.params.id, req.body)
        return res.status(200).json(Cart)
    } catch (error) {
        return res.status(400).json({
            message: error
        })
    }
}
export const deleteColorProducts = async (req, res) => {
    try {
        const Cart = await colorProducts.findByIdAndDelete(req.params.id)
        return res.status(200).json(Cart)
    } catch (error) {
        return res.status(400).json({
            message: error
        })
    }
}