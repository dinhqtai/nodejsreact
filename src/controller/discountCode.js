import discountCode from "../mongo/discountCode"
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
        const { name, price, discountCode, soLuong } = req.body
        const DiscountCode = await discountCode.create(req.body)
        return res.status(200).json({ DiscountCode })
    } catch (error) {
        return res.status(400).json({
            message: error
        })
    }
}
export const updatediscountCode = async (req, res) => {
    try {
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
        const checkDiscountFind = await discountCode.findOne({ discountCode: req.body.discountCode })
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