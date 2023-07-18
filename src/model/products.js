import Joi from "joi";
export const ModelProducts = Joi.object({
    name: Joi.string().required(),
    price: Joi.number().required(),
    desc: Joi.string().required(),
    image: Joi.string().required(),
    soLuong: Joi.number().required(),
    category_id: Joi.string().required()
})