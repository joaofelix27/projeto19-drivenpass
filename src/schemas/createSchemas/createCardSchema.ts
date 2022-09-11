import joi from "joi"

export const createCardSchema =joi.object().keys ({
    number:joi.string().length(16).required(),
    name:joi.string().required(),
    securityCode:joi.string().length(3).required(),
    expirationDate:joi.string().length(5).required(),
    password:joi.string().required(),
    title:joi.string().required(),
    isVirtual:joi.boolean().strict().required(),
    type:joi.string().valid("Credit","Debit","Value").required()
})