import quantilyProducts from "../mongo/quantilyProducts"
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
        const Cart = await quantilyProducts.create(req.body)
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