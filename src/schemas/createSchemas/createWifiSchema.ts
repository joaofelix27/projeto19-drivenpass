import joi from "joi";

export const createWifiSchema =joi.object ({
    name:joi.string().required(),
    password:joi.string().required(),
    title:joi.string().required()
})