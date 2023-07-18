import joi from "joi"
export const ModelAbout=joi.object({
    name:joi.string().required(),
    title:joi.string().required(),
    desc:joi.string().required()
})