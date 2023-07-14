import Joi from "joi";
export const ModelProducts = Joi.object({
    name: Joi.string().required(),
    price: Joi.number().required(),
    desc: Joi.string().required(),
})