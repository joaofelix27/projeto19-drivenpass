import joi from "joi";

export const deleteCredentialSchema =joi.object ({
    id:joi.number().integer().greater(0).required()
 })