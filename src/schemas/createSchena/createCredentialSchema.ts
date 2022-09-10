import joi from "joi";

export const createCredentialSchema =joi.object ({
    url:joi.string().required(),
    name:joi.string().required(),
    password:joi.string().required(),
    title:joi.string().required()
})