import Joi from "joi";
export const DangKi = Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().required()
});
export const DangNhap = Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().required(),
});