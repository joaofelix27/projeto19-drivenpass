import joi from "joi";

export const getCredentialSchema =joi.object ({
   id:joi.number().integer().greater(0)
})
