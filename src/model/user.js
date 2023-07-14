import Joi, { string } from "joi";
export const DangKi = Joi.object({
    email: Joi.string().required(),
    password: Joi.string().required()
});
export const DangNhap = Joi.object({
    email: Joi.string().required(),
    password: Joi.string().required(),
});