import cart from "../mongo/cart"
export const getAllCart = async (req, res) => {
    try {
        const Cart = await cart.find()
        return res.status(200).json(Cart)
    } catch (error) {
        return res.status(400).json({
            message: error
        })
    }
}
export const getCart = async (req, res) => {
    try {
        const Cart = await cart.findById(req.params.id)
        return res.status(200).json(Cart)
    } catch (error) {
        return res.status(400).json({
            message: error
        })
    }
}
export const postCart = async (req, res) => {
    try {
        const checkCartUser = await cart.findOne({ idUser: req.body.idUser })
        if (!checkCartUser) {
            const Cart = await cart.create(req.body)
        }
        const updateCart = [...checkCartUser.Cart, ...req.body.Cart]
        const updateCartUser = await cart.findByIdAndUpdate(checkCartUser._id, { Cart: updateCart })
        return res.status(200).json(updateCartUser)
    } catch (error) {
        return res.status(400).json({
            message: error
        })
    }
}
export const updateCart = async (req, res) => {
    try {
        const Cart = await cart.findByIdAndUpdate(req.params.id, req.body)
        return res.status(200).json(Cart)
    } catch (error) {
        return res.status(400).json({
            message: error
        })
    }
}
export const deleteCart = async (req, res) => {
    try {
        const Cart = await cart.findByIdAndDelete(req.params.id)
        return res.status(200).json(Cart)
    } catch (error) {
        return res.status(400).json({
            message: error
        })
    }
}