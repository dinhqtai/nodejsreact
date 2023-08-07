import Joi from "joi";
export const AddDiscount = Joi.object({
    name: Joi.string().min(5).required().messages({
        "string.min": "Tên mã giảm giá bắt buộc lớn hơn 5 kí tự",
        "any.required": 'Không được để trống tên mã giảm giá',
    }),
    price: Joi.number().required().min(0).messages({
        "number.min": "Giá giảm giá không được nhỏ hơn 0",
        "any.required": "Không được để trống giá giảm giá"
    }),
    soLuong: Joi.number().min(0).required().messages({
        "number.min": "Số lượng mã giảm giá không được nhỏ hơn 0",
        "any.required": "Không được để trống số lượng"
    }),
    discount: Joi.string().required().min(10).messages({
        "string.min": "Mã code tối thiểu 10 kí tự",
        "any.required": "Không được để trống mã code giảm giá"
    })
});