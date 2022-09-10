import joi from "joi";

export const getSchema =joi.object ({
   id:joi.number().integer().greater(0)
})
