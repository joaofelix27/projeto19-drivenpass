import joi from "joi";

export const deleteSchema =joi.object ({
    id:joi.number().integer().greater(0).required()
 })