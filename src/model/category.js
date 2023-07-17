import Joi from "joi";
export const ModelCategory = Joi.object({
    name: Joi.string().required().min(5).message({
        "string.min": "Tên mã giảm giá bắt buộc lớn hơn 5 kí tự",
        "any.required": "Không được để trống ",
    }),
})