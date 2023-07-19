import Joi from "joi";
export const Signup = Joi.object({
    email: Joi.string().email().required().messages({
        "string.email": "Định dạng không đúng",
        "any.required": "Không được để trống giá giảm giá"
    }),
    password: Joi.string().min(10).required().messages({
        "string.min": "Mật khẩu ít nhất có 10 kí tự",
        "any.required": "Không được để trống giá giảm giá"
    })
});
export const Signin = Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().required(),
});