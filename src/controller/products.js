import products from "../mongo/products";
export const getAll = async (req, res) => {
    try {
        const Product = await products.find()
        return res.status(200).json(Product)
    } catch (error) {
        return res.status(400).json({
            message: error
        })
    }
}
export const getProducts = async (req, res) => {
    try {
        const Product = await products.findById(req.params.id)
        return res.status(200).json(Product)
    } catch (error) {
        return res.status(400).json({
            message: error
        })
    }
}
export const postProducts = async (req, res) => {
    try {
        const Product = await products.create(req.body)
        return res.status(200).json(Product)
    } catch (error) {
        return res.status(400).json({
            message: error
        })
    }
}
export const update = async (req, res) => {
    try {
        const Product = await products.findByIdAndUpdate(req.params.id, req.body)
        return res.status(200).json(Product)
    } catch (error) {
        return res.status(400).json({
            message: error
        })
    }
}
export const deleteProduct = async (req, res) => {
    try {
        const Product = await products.findByIdAndDelete(req.params.id)
        return res.status(200).json(Product)
    } catch (error) {
        return res.status(400).json({
            message: error
        })
    }
}